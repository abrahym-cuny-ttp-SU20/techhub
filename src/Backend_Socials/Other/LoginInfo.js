const Pool = require('pg').Pool
const pool = new Pool({
  user: REACT_APP_User,
  host: REACT_APP_Host,
  database: REACT_APP_Database,
  password: REACT_APP_Password,
  port: 5432,
});

const getSocialInfo = () => {
    return new Promise(function(reslove, reject){
        pool.query('SELECT * FROM socialinfo',(error,results)=>{
            if(error){
                reject(error)
            }
            reslove(results.rows);
        })
    })
}


const createSocialInfo = (body) =>{
    return new Promise(
        function(resolve, reject){
            const {socialName, userName} = body
            pool.query('INSERT INTO socialinfo ("socialName", "userName") VALUES ($1,$2) RETURNING *', [socialName, userName],
            (error,results) => {    
                if(error) {
                    console.log(error)
                        reject(error)
                }
                resolve('A new account has been added')

            })
        })
}

module.exports = {
    getSocialInfo,
    createSocialInfo,
}