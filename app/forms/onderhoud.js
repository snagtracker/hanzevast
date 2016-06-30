import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  subject: validator('presence', true),
  locatie: validator('presence', true),
  // body: validator('presence', true),
  // photo:
});

export default Ember.Object.extend(Validations);