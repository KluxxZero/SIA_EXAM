// config/plugins.js
module.exports = {
  'users-permissions': {
    jwtSecret: process.env.JWT_SECRET || 'your-jwt-secret-key', // You can replace with your custom secret
  },
};