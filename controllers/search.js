const { CompanyData } = require("../models/index")
const { Sequelize, Op } = require("sequelize");
const { keyBy } = require("lodash");

module.exports =  {
    data: async (req,res)=>{
        try {
            const { Firmanavn , virksomhedsform ,branchebetegnelse_primær,ansatte, antalPenheder,yearly_result } = req.body;
            const searchTerms = Firmanavn.split();     
         const whereClause = {Firmanavn:{
         [Op.or]:[]
        }};
      for( let searchTerm of searchTerms  ) {
          whereClause.Firmanavn[Op.or].push({
            [Op.like]: `%${searchTerm}%`
            })
        }
        
            const rq = { ...whereClause , virksomhedsform ,branchebetegnelse_primær,ansatte, antalPenheder,yearly_result }
            const OrCond = [];
            for (var k in rq){
                if (rq.hasOwnProperty(k)) {
                    if(rq[k]) OrCond.push({[k]: rq[k]});
                }
            }
            console.log(OrCond);
        //  if (!Firmanavn || !virksomhedsform ||!branchebetegnelse_primær ||!ansatte ||!antalPenheder ||!yearly_result) {
        //   throw { status: 400, message: "Required field cannot be empty." };
        // } 
    //     const searchTerms = Firmanavn.split();     
    //      const whereClause = {Firmanavn:{
    //      [Op.or]:[]
    //     }};
    //   for( let searchTerm of searchTerms  ) {
    //       whereClause.Firmanavn[Op.or].push({
    //         [Op.like]: `%${searchTerm}%`
    //         })
    //     }
    // buffer.toString('utf8')

        const comp = await CompanyData.findAll({
            where:{
               [Op.or]:[OrCond]
        }
        })
        res.status(200).send({'companies': comp});
    }catch (err) {
        return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong...");
        }
}
}