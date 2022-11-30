const { CompanyData, AddressData} = require("../models/index")
const { Sequelize, Op } = require("sequelize");

module.exports =  {
    data: async (req,res)=>{
        try {
            const { Firmanavn , virksomhedsform ,branchebetegnelse_primær,ansatte, antalPenheder,yearly_result , p_kommunenavn, p_region} = req.body;
            const whereClause = {Firmanavn:{
            [Op.or]:[]
           }};
            if(Firmanavn){
                const searchTerms = Firmanavn.split(" ");     
      for( let searchTerm of searchTerms  ) {
          whereClause.Firmanavn[Op.or].push({
            [Op.like]: `%${searchTerm}%`
            })
        }}
            const rr = {p_kommunenavn,p_region}
            const Orcond = [];
            for (var q in rr){
                if (rr.hasOwnProperty(q)) {
                    if(rr[q]) Orcond.push({[q]: rr[q]});
                }}
            console.log(Orcond);
            const rq = { ...whereClause , virksomhedsform ,branchebetegnelse_primær,ansatte, antalPenheder,yearly_result}
            const OrCond = [];
            for (var k in rq){
                if (rq.hasOwnProperty(k)) {
                    if(rq[k]) OrCond.push({[k]: rq[k]});
                }}
            console.log(OrCond);
        const comp = await CompanyData.findAll({
            // where:{
            //     p_kommunenavn:p_kommunenavn,
            //     include:[{
            //         model:CompanyData,
            //         as:"company_data"
            //     }]
            // },
            where:{
               [Op.or]:[OrCond]
        },
        include: {
            model: AddressData,
            as: "address",
             where: {
                [Op.or]:[Orcond]
             }
        },
       
        })
        res.status(200).send({'companies': comp});
    }catch (err) {
        return res
        .status(err.status || 500)
        .send(err.message || "Something went wrong...");
        }
}
}
