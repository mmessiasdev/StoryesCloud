const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host('ec2-44-205-177-160.compute-1.amazonaws.com'),
      port: config.port('5432'),
      database: config.database('dfqfpnsrk1depa'),
      user: config.user('izienauypxaraj'),
      password: config.password('96af91f0cb23ce1743334965ae89bca51d961e2c033757ae3d46b2c4da6a027f'),
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});

// postgres://izienauypxaraj:96af91f0cb23ce1743334965ae89bca51d961e2c033757ae3d46b2c4da6a027f@ec2-44-205-177-160.compute-1.amazonaws.com:5432/dfqfpnsrk1depa