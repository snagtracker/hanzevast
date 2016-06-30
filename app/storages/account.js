import StorageObject from 'ember-local-storage/local/object';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  naam: validator('presence', true),
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ]
});

const Storage = StorageObject.extend(Validations);

// Uncomment if you would like to set initialState
// Storage.reopenClass({
//   initialState() {
//     return {};
//   }
// });

export default Storage;