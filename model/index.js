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

const psqlRetrieveAll = (req, res) => {
    const QUERYALLLIMIT10 = `SELECT * FROM ${AWSTABLE} limit 10`;
    
    pool.query(QUERYALLLIMIT10)
    .then((data) => {
        // console.log('data.rows: ', data.rows);
         res.status(200).send(data.rows)
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    }); 
}

const psqlRetrieveOne = (req, res) => {
    
  const QUERYONE = 'SELECT * FROM neighborhood WHERE \"uniqueId\" = ' + req.params.id;

  pool.query(QUERYONE)
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