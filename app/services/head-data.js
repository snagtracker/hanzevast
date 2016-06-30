/*global loadImage:false */
import Ember from 'ember';
import HeadDataService from 'ember-cli-head/services/head-data';
import { storageFor } from 'ember-local-storage';

const {
  RSVP,
  computed
} = Ember;

const computedImage = computed('image.dataURL', function(key) {
    return this.get('image.dataURL') && RSVP.Promise.cast(this.get('image.dataURL')).then((canvasURL) => {
      return new RSVP.Promise((res, rej) => {
        loadImage(canvasURL, (canvas) => {
          if (canvas.type === "error") {
            return rej(canvas);
          }
          res(canvas.toDataURL());
        }, {
          maxWidth: parseInt(key.replace(/[^\d]*/g,''), 10),
          downsamplingRatio: 0.5,
          canvas: true
        });
      });
    });
  });

export default HeadDataService.extend({
  title: 'Hanzevast onderhoud',
  image: storageFor('image'),

  image16Promise:  computedImage,
  image32Promise:  computedImage,
  image76Promise:  computedImage,
  image152Promise: computedImage,
  image167Promise: computedImage,
  image180Promise: computedImage,
  image192Promise: computedImage
});