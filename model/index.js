require('dotenv').config();

const pg = require('pg');

const POSTGRESUSER = process.env.POSTGRESUSER || 'postgres';
const DATABASE = process.env.DATABASE || 'seir';
const PASSWORD = process.env.PASSWORD || 'root';
const AWSTABLE = process.env.AWSTABLE || 'neighborhood';

const config = {
  user: POSTGRESUSER,
  database: DATABASE,
  password: PASSWORD,
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
}

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('connected to the Database');
});

var psqlRetrieveAll = (req, res) => {
    var getEverything = `SELECT * FROM ${AWSTABLE} limit 10`;
    
    return pool.query(getEverything)
    .then((data) => {
        // console.log('data.rows: ', data.rows);
         res.status(200).send(data.rows)
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    }); 
}

var psqlRetrieveOne = (req, res) => {
    
  var getOne = 'SELECT * FROM neighborhood WHERE \"uniqueId\" = ' + req.params.id;

  return pool.query(getOne)
      .then((data) => {
          res.status(200).send(data.rows)
      })
      .catch((err) => {
          console.log(err);
          // pool.end();
        }); 
}

module.exports = {
  'psqlRetrieveAll': psqlRetrieveAll,
  'psqlRetrieveOne': psqlRetrieveOne
}