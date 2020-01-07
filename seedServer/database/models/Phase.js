'use strict';
module.exports = (sequelize, DataTypes) => {
  const Phase = sequelize.define('phase', {
    name: DataTypes.STRING
  }, {});
  Phase.associate = function(models) {
    // associations can be defined here
  };
  return Phase;
};