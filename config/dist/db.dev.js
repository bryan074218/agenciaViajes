"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// console.log(process.env.BD_NOMBRE);
var db = new _sequelize["default"]('agenciaViajes', 'root', 'bryangomez2021', {
  host: 'captain.servicios.saynets.com',
  port: '6969',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 1000
  },
  operatorsAliases: false
});
var _default = db;
exports["default"] = _default;