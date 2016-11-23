const path      = require('path');
const fs        = require('fs');
const Sequelize = require('sequelize');
const config    = require('../config/config.json');

const models = {};
const env    = process.env.NODE_ENV;
const currentConfig = config[env || 'development'];

const sequelize = new Sequelize(
  currentConfig.database,
  currentConfig.username,
  currentConfig.password,
  currentConfig
);

fs
  .readdirSync(__dirname)
  .filter(file => file.indexOf('.') && file !== 'index.js' && file.slice(-3) === '.js')
  .forEach(function(file) {
    const model = sequelize['import'](path.join(__dirname, file));
    models[model.name] = model;
  });

Object.keys(models).forEach(function(modelName) {
  if (models[modelName].associate) { models[modelName].associate(models); }
});

models.sequelize = sequelize;

module.exports = models;
