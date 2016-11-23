module.exports = function(sequelize, DataTypes) {
  const Model = sequelize.define('ModelName', {
    id: {
      type:          DataTypes.INTEGER,
      allowNull:     false,
      unique:        true,
      primaryKey:    true,
      autoIncrement: true
    }
  }, {
    timestamps: true,
    classMethods: {
      associate: function(models) {

      }
    }
  });
  return Model;
};
