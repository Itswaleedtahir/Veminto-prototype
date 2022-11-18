// const { Employees , Services} = require("../models/index")
// const { Sequelize, Op } = require("sequelize");
// module.exports = {
//   //website data api
//   data: async (req, res) => {
//       console.log(req.body);
//       try {
//           const { companyName, industry,service, keywords,numberOfEmployees, websiteUrl } = req.body;
//           if (!companyName || !industry ||!service || !keywords || !numberOfEmployees || !websiteUrl) {
//               throw { status: 400, message: "Required field cannot be empty." };
//             }
//           const web = await Companies.create({
//               companyName: companyName,
//               industry: industry,
//               service: service,
//               keywords: keywords,
//               numberOfEmployees: numberOfEmployees,
//               websiteUrl: websiteUrl
//           });
    
//           res.status(200).send("Company created successfully");
//       } catch (err) {
//           console.log(err);
//        return res
//       .status(err.status || 500)
//       .message(err.message || "Something went wrong...");
//       }
//   },
//   //getting all companies
//   getCompanies: async (req, res) => {
//       try {
//         const websitess = await Companies.findAll();
//         res.status(200).send({ websitess });
//       } catch (error) {
//         console.log(error);
//         return res
//           .status(error.status || 500)
//           .send(error.message || "Something went wrong...");
//       }
//     },
//     //getting single company
//     getsingle: async (req,res)=>{
//       try {
//           const { companyName } = req.body;
//           if (!companyName) {
//             throw { status: 400, message: "Required field cannot be empty." };
//           }
//           const searchTerms = companyName.split(" ");     
//           const whereClause = {companyName:{
//             [Op.or]:[]
//           }};
//         for( let searchTerm of searchTerms  ) {
//             whereClause.companyName[Op.or].push({
//               [Op.like]: `%${searchTerm}%`
//             })
//         }
//           const com = await Companies.findAll({
//             where:whereClause,
//             include:[{
//               model: Employees,
//               as: "employees"
//             }]
//           })
//          //console.log(req.companny.id);
//           // const employee = await employees.findAll({

//           //   where:{

//           //     fk_company_id: req.company.id
//           //   },
//           //   include: [{
//           //     model: companies ,
//           //     as: "company"
//           //   }
//           // ]
//           // })
//           res.status(200).send({'companies': com});
//       } catch (err) {
//         console.log(err);
//             return res
//               .status(err.status || 500)
//               .send(err.message || "Something went wrong...");
//       }
//     },
//     //getting comapny by service
//     getsingleService: async (req,res)=>{
//       try {
//           const { services } = req.body;
//           if (!services) {
//             throw { status: 400, message: "Required field cannot be empty." };
//           }
//          const searchTerms = services.split(",");     
//           const whereClause = {service:{
//             [Op.or]:[]
//           }};
//         for( let searchTerm of searchTerms  ) {
//             whereClause.service[Op.or].push({
//               [Op.like]: `%${searchTerm}%`
//             })
//         }
//         const com = await Companies.findAll({
//           where:whereClause
//            })    
//         res.status(200).send(com);
//       } catch (err) {
//         console.log(err);
//             return res
//               .status(err.status || 500)
//               .send(err.message || "Something went wrong...");
//       }
//     },
//     //getting single employee with company details
//     getemployeee: async (req, res)=>{
//         try {
//           const { employeeName } = req.body;
//           console.log(req.body.employeeName)
//           if (!employeeName) {
//             throw { status: 400, message: "Required field cannot be empty." };
//           }
//           const searchTerms = employeeName.split(" ");     
//           const whereClause = {employeeName:{
//             [Op.or]:[]
//           }};
//         for( let searchTerm of searchTerms  ) {
//             whereClause.employeeName[Op.or].push({
//               [Op.like]: `%${searchTerm}%`
//             })
//         }
//           const com = await Employees.findAll({
//             where:whereClause,
//             include:[{
//               model: Companies,
//               as: "company"
//             }]
//           })
//          //console.log(req.companny.id);
//           // const employee = await employees.findAll({

//           //   where:{

//           //     fk_company_id: req.company.id
//           //   },
//           //   include: [{
//           //     model: companies ,
//           //     as: "company"
//           //   }
//           // ]
//           // })
//           res.status(200).send({'Employee': com});
//       } catch (err) {
//         console.log(err);
//             return res
//               .status(err.status || 500)
//               .send(err.message || "Something went wrong...");
//       }
//     },
//     //data entring for service
//   service: async (req,res)=>{
//       try {
//           const { service } = req.body;
//           if (!service) {
//               throw { status: 400, message: "Required field cannot be empty." };
//             }
//             console.log()
//           const services = await Services.create({
//               service: service,
//               companiesId: req.company.id,
//             });
//             return res.status(200).send({ services });
//           } catch (err) {
//             console.log(err);
//             return res
//               .status(err.status || 500)
//               .send(err.message || "Something went wrong...");
//       } 
//   },
//   //getting all the services
//   getServices: async (req, res) => {
//       try {
//         const servicess = await Services.findAll();
//         res.status(200).send({ servicess });
//       } catch (error) {
//         console.log(error);
//         return res
//           .status(error.status || 500)
//           .send(error.message || "Something went wrong...");
//       }
//     },
//     //enntring employee data
//   employe: async (req,res)=>{
//       try {
//           const { employeeName, designation, experience, skills, linkedinProfile, email } = req.body;
//           if (!employeeName || !designation || !experience || !skills || !linkedinProfile || !email) {
//               throw { status: 400, message: "Required field cannot be empty." };
//             }
//           const empl = await Employees.create({
//               employeeName: employeeName,
//               designation: designation,
//               experience: experience,
//               skills: skills,
//               linkedinProfile: linkedinProfile,
//               email: email,
//               fk_company_id: req.company.id
//             });
//             return res.status(200).send({ empl });
//           } catch (err) {
//             console.log(err);
//             return res
//               .status(err.status || 500)
//               .send(err.message || "Something went wrong...");
//       } 
//   },
//   //getting company along with emloyee data
//   getemployee: async (req,res)=>{
//     try {
//         const { companyName } = req.body;
//         if (!companyName) {
//           throw { status: 400, message: "Required field cannot be empty." };
//         }
//         const searchTerms = companyName.split(" ");     
//         const whereClause = {companyName:{
//           [Op.or]:[]
//         }};
//       for( let searchTerm of searchTerms  ) {
//           whereClause.companyName[Op.or].push({
//             [Op.like]: `%${searchTerm}%`
//           })
//       }
//         const com = await Companies.findAll({
//           where:whereClause,
//           include:[{
//             model: Employees,
//             as: "employees"
//           }]
//         })
//        //console.log(req.companny.id);
//         // const employee = await employees.findAll({

//         //   where:{

//         //     fk_company_id: req.company.id
//         //   },
//         //   include: [{
//         //     model: companies ,
//         //     as: "company"
//         //   }
//         // ]
//         // })
//         res.status(200).send({'companies': com});
//     } catch (err) {
//       console.log(err);
//           return res
//             .status(err.status || 500)
//             .send(err.message || "Something went wrong...");
//     }
//   },
// }