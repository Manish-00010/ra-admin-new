module.exports = {
  apps: [{
    name: "ra-admin",
    script: "./src/app.js",
    instances: 1,
    max_memory_restart: "200M",
    env_production: {
      NODE_ENV: "production",
      PORT: 3000
    }
  }]
}
