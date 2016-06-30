import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
import ENV from '../../config/environment';

const {
  computed
} = Ember;

export default Ember.Controller.extend({
  account: storageFor('account'),

  origin: computed(function(){
    const {protocol, hostname, port} = window.location;
    let origin = protocol + '//' +  hostname + (port ? ':' + port: '');
    return (ENV.rootURL.match(/https?:\/\//i) ? '' : origin) + ENV.rootURL;
  }),

  image: null,
  isSubmitting: false,
  actions: {
    handleImage(image) {
      this.setProperties({image});
    },
    handleSubmit() {
      this.set('isSubmitting', true);
    },
    triggerValidation() {
      this.get('model').setProperties({
        naamTouched: true,
        emailTouched: true,
        subjectTouched: true,
        locatieTouched: true
      });
    }
  }
});
