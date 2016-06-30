import Ember from 'ember';

const {
  $,
  RSVP
} = Ember;

export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
    sendEmail(data) {
      let url = 'https://getsimpleform.com/messages/ajax?form_api_token=93feec8ab273bc05e6f7015dc8e918ec';
      // let url = 'https://formspree.io/sjoerd@snagtracker.com';

      let formData = new FormData();

      Object.keys(data).forEach((key) => {
        console.log('data', key, data[key]);
        formData.append(key, data[key]);
      });

      RSVP.Promise.cast($.ajax({
        url,
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json'
      }))
      .then((result) => {
        console.log('ajax result', result);
      });
    }
  }
});
