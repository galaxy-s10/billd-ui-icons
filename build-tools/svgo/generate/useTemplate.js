const { template } = require('lodash');

function useTemplate(_template, data) {
  const compiled = template(_template);
  return compiled(data);
}
module.exports = useTemplate;
