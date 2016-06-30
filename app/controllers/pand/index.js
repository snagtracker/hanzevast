/*global loadImage:true */
import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
import ENV from '../../config/environment';

const {
  $,
  isEmpty,
  computed,
  inject: {
    controller
  }
} = Ember;

export default Ember.Controller.extend({
  pand: controller(),

  account: storageFor('account'),
  hasAccount: computed('account.naam', 'account.email', function() {
    return !isEmpty(this.get('account.naam')) && !isEmpty(this.get('account.email'));
  }),

  origin: computed(function(){
    const {protocol, hostname, port} = window.location;
    let origin = protocol + '//' +  hostname + (port ? ':' + port: '');
    return (ENV.rootURL.match(/https?:\/\//i) ? '' : origin) + ENV.rootURL;
  }),

  image: null,
  actions: {
    addHandler(e) {
      let fileInput = e.target;
      $(fileInput).one('change', (e) => {
        loadImage(
          e.target.files[0],
          (img) => {
            this.set('image', img);
          },
          { maxWidth: 600 }
        );
      });
    }
  }
});
