module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5c37148e92357eb45d3e1d8fe38d8deb'),
  },
});
