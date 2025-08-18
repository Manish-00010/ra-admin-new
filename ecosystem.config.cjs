/*module.exports = {
  apps: [
    {
      name: "ra-admin",
      script: "serve",
      args: "-s dist -l 3001",
      cwd: "/var/www/html/ra-admin"
    }
  ]
};*/



// ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: "ra-admin",
      script: "serve",
      env: {
        PM2_SERVE_PATH: "/var/www/html/ra-admin/dist",
        PM2_SERVE_PORT: 3001,
        PM2_SERVE_SPA: "true"
      }
    }
  ]
};
