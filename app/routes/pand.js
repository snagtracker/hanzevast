import Ember from 'ember';
import ENV from '../config/environment';
import { storageFor } from 'ember-local-storage';
import Form from '../forms/onderhoud';

const {
  inject: {
    service
  },
  String: {
    capitalize
  },
  getOwner
} = Ember;

export default Ember.Route.extend({
  imageStorage: storageFor('image'),
  headData: service(),

  model(params) {
    return Ember.Object.create(getOwner(this).ownerInjection(), {
      src: `${ENV.rootURL}images/portefeuille/square_${params.name}.jpg`,
      name: params.name.split('-').map((p) => capitalize(p)).join(' '),
      form: Form.create(getOwner(this).ownerInjection())
    });
  },

  afterModel(model/*, transition*/) {
    this.set('imageStorage.dataURL', model.src);
    this.set('headData.title', model.name);
  }
});
