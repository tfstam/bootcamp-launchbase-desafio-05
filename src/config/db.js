const { Pool } = require('pg')

module.exports = new Pool({
  user: 'tamiressantos',
  password: '',
  host: 'localhost',
  port: '5432',
  database: 'foodfy'
})