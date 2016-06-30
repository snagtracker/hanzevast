import Ember from 'ember';

const {
  computed,
  $
} = Ember;

export default Ember.Service.extend({
  //## ONLINE OFFLINE ###
  isOnline: computed(function() {
    return window.navigator.onLine;
  }),
  isOffline: computed.not('isOnline'),

  _listenOnOffline: function(){
    var isOnline = () => this.set('isOnline', true);
    var isOffline = () => this.set('isOnline', false);
    // see http://robertnyman.com/html5/offline/online-offline-events.html
    if (window.addEventListener) {
      window.addEventListener('online', isOnline, false);
      window.addEventListener('offline', isOffline, false);
    } else {
      document.body.ononline = isOnline;
      document.body.onoffline = isOffline;
    }
  }.on('init'),

  isIOS: computed(function() {
    return navigator.userAgent.toLowerCase().match(/iphone|ipad|ipod/);
  }),
  isIE: computed(function() {
    return navigator.userAgent.toLowerCase().match(/msie/);
  }),
  isEdge: computed(function() {
    return navigator.appName === 'Netscape' && navigator.appVersion.toLowerCase().match(/trident/);
  }),
  isIEOrEdge: computed.or('isIE', 'isEdge'),
  isAndroid: computed(function() {
    return navigator.userAgent.toLowerCase().match(/android/);
  }),
  isFirefox: computed(function() {
    return navigator.userAgent.toLowerCase().match(/firefox/);
  }),
  isChrome: computed(function() {
    return navigator.userAgent.toLowerCase().match(/chrome/);
  }),
  isSafari: computed(function() {
    // https://github.com/pouchdb/pouchdb/pull/4343#issuecomment-140785102
    return navigator.platform.toLowerCase() === 'ipad' || /(Safari|iPhone|iPad|iPod)/i.test(navigator.userAgent) &&
      !/Chrome/i.test(navigator.userAgent) &&
      !/BlackBerry/i.test(navigator.platform);
  }),

  // screen size
  screenWidth: computed(function() { return $(window).width(); }),
  screenHeight: computed(function() { return $(window).height(); }),
  registerResizeEvent: function() {
    $(window).resize(() => {
      Ember.run(() => {
        this.notifyPropertyChange('screenWidth');
        this.notifyPropertyChange('screenHeight');
      });
    });
  }.on('init'),

  isXs: computed.lt('screenWidth', 640),

  // from http://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-handheld-device-in-jquery
  device: computed(function() {
    return navigator.userAgent.toLowerCase().match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i);
  }),
  isDevice: computed.notEmpty('device'),
  isDeviceApp: computed('isDevice', function() {
    if (!this.get('isDevice')) { return false; }
    // http://www.mobilexweb.com/blog/home-screen-web-apps-android-chrome-31
    return navigator.standalone || ((screen.height-document.documentElement.clientHeight)<40);
  }),
  isDesktop: computed.not('isDevice'),

  isPhone: computed.and('isDevice', 'isXs'),
  isTablet: computed('isDevice', 'isPhone', function() {
    return this.get('isDevice') && !this.get('isPhone');
  }),

  isPortrait: computed('screenWidth', 'screenHeight', function() {
    return this.get('screenWidth') < this.get('screenHeight');
  }),
  isLandscape: computed.not('isPortrait'),
});