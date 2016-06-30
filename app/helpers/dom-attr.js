import Ember from 'ember';

const {
  $
} = Ember;

export function domAttr(params, hash) {
  let elt = params[0];
  Object.keys(hash).forEach((key) => {
    $(elt).attr(key, hash[key]);
  });
  return elt;
}

export default Ember.Helper.helper(domAttr);
