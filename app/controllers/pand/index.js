/*global loadImage:true */
import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
import ENV from '../../config/environment';

const {
  $,
  isEmpty,
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
  actions: {
    handleImage(image) {
      this.setProperties({image});
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
