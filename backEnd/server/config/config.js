module.exports = {
  "local": {
    "username": 'postgres',
    "password": process.env.PASSWORD || 'admin',
    "database": process.env.DATABASE || 'xbmaster',
    "host": process.env.DBHOST || '192.168.50.48',
  }
}
