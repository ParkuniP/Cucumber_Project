module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["step-definitions/**/*.ts"],
    format: ["progress"],
    timeout: 60000
  }
};