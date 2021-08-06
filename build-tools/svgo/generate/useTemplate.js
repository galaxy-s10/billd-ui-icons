import { template } from 'lodash';

export default function useTemplate(_template, data) {
  const compiled = template(_template);
  return compiled(data);
}
