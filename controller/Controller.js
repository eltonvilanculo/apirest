require('dotenv').config()
const Common = require ('../controller/Common')
const users = function index(connection,res){

    connection.query(process.env.All_USERS,(err,row)=>{

        if(err) throw  err 
        
        res.status(200).send(JSON.stringify(row))

    })

}

const user =  (connection,req,res)=>{

    connection.query(Common.SINGLE_USER(req.query.person_id),(err,row)=>{

        if(err) throw  err
        
        res.status(200).send(row)


    })
}

const STORE_USER =  (connection,req,res)=>{

    connection.query(Common.STORE_USER(req.query.person_id,req.query.person_name,req.query.person_bio,req.query.person_email,req.query.person_phone_number,req.query.person_avatar,req.query.person_address),(err,row)=>{

        if(err) throw  err
      
        const status = {
            sucess: true,
            body : res.body,
            data: row
        }
        res.status(200).send(status)


    })
}


module.exports = {
    All_USERS:users,
    SINGLE_USER : user , 
    STORE_USER : STORE_USER


}