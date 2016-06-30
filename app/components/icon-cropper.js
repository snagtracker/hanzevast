// import Ember from 'ember';
import imageCropper from 'ember-cli-image-cropper/components/image-cropper';
import { storageFor } from 'ember-local-storage';

export default imageCropper.extend({
  imageStorage: storageFor('image'),

  //override default options of cropper
  aspectRatio: 1,
  minCropBoxWidth: 10,
  minCropBoxHeight: 10,
  cropperContainer: '.cropper-container > img',
  // zoomable: false,

  croppedAvatar: null,

  actions: {
    getCroppedAvatar: function() {
      var container = this.$(this.get('cropperContainer'));
      var croppedImage = container.cropper('getCroppedCanvas', {
        width: 512,
        height: 512
      });
      this.set('croppedAvatar', croppedImage.toDataURL());
      this.set('imageStorage.dataURL', this.get('croppedAvatar'));
    }
  }
});