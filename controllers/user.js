const {Users} = require("../models/index")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

module.exports = {
    signUp: async (req,res)=>{
       try {
        const { firstname,lastname,email,DOB,gender,password } = req.body;
        if (!firstname || !lastname || !email|| !DOB || !gender|| !password) {
          throw { status: 400, message: "Required fields cannot be empty." };
        }
          const emailfound = await Users.findOne({
              where: {
                email: email,
              }
            });
            if (emailfound) {
              throw { status: 409, message: "email already exists." };}
              let user = await Users.create(
                  {
                    firstName:firstname,
                    lastName:lastname,
                    email:email,
                    DOB:DOB,
                    gender:gender,
                    password:password
                  });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      const token = jwt.sign({ 
        id: user.id,
        firstName: user.firstName, 
        lastname: user.lastName, 
        email: user.email,
        password:user.password
    }, process.env.jwtPrivateKey);
    await user.save();
    res.header('x-auth-token', token).send(_.pick(user, ['email', 'firstName', 'lastName']));
        
       } catch (err) {
        return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong...");
       }
},
    logIn: async (req,res)=>{
        try {
            const { email,password } = req.body;
            if (!email|| !password) {
              throw { status: 400, message: "Required fields cannot be empty." };
            }
              const user = await Users.findOne({
                  where: {
                    email: email,
                  }
                });
                if (!user) {
                  throw { status: 409, message: "Invalid email or password." };}

                  let validPassword = await bcrypt.compare(req.body.password, user.password);
                  if (!validPassword) return res.status(400).send('Invalid email or password.');
        const token = jwt.sign({ 
            id: user.id,
        firstName: user.firstName, 
        lastname: user.lastName, 
        email: user.email,
        password:user.password
        }, process.env.jwtPrivateKey);
        res.send(token);        

        } catch (err) {
            return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong...");
        }
    }
}
   