/*global loadImage:true */
import PaperInput from 'ember-paper/components/paper-input';
import Ember from 'ember';

const {
  $
} = Ember;

export default PaperInput.extend({
  type: 'file',
  didInsertElement() {
    this._super(...arguments);
    $('input[type=file]', this.get('element')).on('change', (e) => {
      loadImage(
        e.target.files[0],
        (img) => {
          this.trigger('onImage', img);
        },
        { maxWidth: 600 }
      );
    });
  }
});
