const oracledb = require('oracledb');
const dbConfig = require('./config/database.js');
 
async function initialize() {
  const pool = await oracledb.createPool(dbConfig.hrPool, function(err)
  {
    if (err) {
      console.log("Failed to create oracle db pool..." );
      } else {
        console.log("SUCCESSSSSSSSSSSSSSSSS" );
      }
  });
}
 
module.exports.initialize = initialize;

function simpleExecute(statement, binds = [], opts = {}) {
  console.log("Inside simple execute");
  return new Promise(async (resolve, reject) => {
    let conn;
  
    opts.outFormat = oracledb.OBJECT;
    opts.autoCommit = true;
  
    try {
      console.log("Inside simple execute TRY");
      conn = await oracledb.getConnection();
      console.log("got CON");
      const result = await conn.execute(statement, binds, opts);
  
      resolve(result);
    } catch (err) {
      console.log("MY ERRORRRRRRRRRRRRRRRR: " +err);
      reject(err);
    } finally {
      if (conn) { // conn assignment worked, need to close
        try {
          await conn.close();
        } catch (err) {
          console.log("MY ERROR: " +err);
        }
      }
    }
  });
}
  
module.exports.simpleExecute = simpleExecute;