// const  {Companies}  = require("../models");
// module.exports = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     console.log(id);
//     const compe = await Companies.findByPk(id);
//     if (!compe) {
//       throw { status: 409, message: "Company doesn't exist" };
//     }
//     req.company = compe;
//     next();
//   } catch (err) {
//     console.log(err);
//     return res
//       .status(err.status || 500)
//       .send(err.message || "Something went wrong");
//   }
// };