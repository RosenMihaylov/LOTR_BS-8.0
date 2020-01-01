module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "LOTR-8.0",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "rosen",
    options: {
      dialect: process.env.DIALECT || "postgres",
      host: process.env.HOST || "localhost"
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || `secret`
  }
};
