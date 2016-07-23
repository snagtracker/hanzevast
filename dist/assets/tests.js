define('portefeuille/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('portefeuille/tests/components/icon-cropper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/icon-cropper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/icon-cropper.js should pass jshint.');
  });
});
define('portefeuille/tests/components/paper-file-input.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/paper-file-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/paper-file-input.js should pass jshint.');
  });
});
define('portefeuille/tests/controllers/pand/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/pand/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/pand/index.js should pass jshint.');
  });
});
define('portefeuille/tests/forms/onderhoud.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | forms/onderhoud.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'forms/onderhoud.js should pass jshint.');
  });
});
define('portefeuille/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('portefeuille/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('portefeuille/tests/helpers/dom-attr.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/dom-attr.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/dom-attr.js should pass jshint.');
  });
});
define('portefeuille/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'portefeuille/tests/helpers/start-app', 'portefeuille/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _portefeuilleTestsHelpersStartApp, _portefeuilleTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _portefeuilleTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _portefeuilleTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('portefeuille/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('portefeuille/tests/helpers/resolver', ['exports', 'portefeuille/resolver', 'portefeuille/config/environment'], function (exports, _portefeuilleResolver, _portefeuilleConfigEnvironment) {

  var resolver = _portefeuilleResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _portefeuilleConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _portefeuilleConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('portefeuille/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('portefeuille/tests/helpers/start-app', ['exports', 'ember', 'portefeuille/app', 'portefeuille/config/environment'], function (exports, _ember, _portefeuilleApp, _portefeuilleConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _portefeuilleConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _portefeuilleApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('portefeuille/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('portefeuille/tests/integration/components/icon-cropper-test', ['exports', 'ember-qunit', 'htmlbars-inline-precompile'], function (exports, _emberQunit, _htmlbarsInlinePrecompile) {
  var _templateObject = _taggedTemplateLiteral(['{{icon-cropper}}'], ['{{icon-cropper}}']),
      _templateObject2 = _taggedTemplateLiteral(['\n    {{#icon-cropper}}\n      template block text\n    {{/icon-cropper}}\n  '], ['\n    {{#icon-cropper}}\n      template block text\n    {{/icon-cropper}}\n  ']);

  function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  (0, _emberQunit.moduleForComponent)('icon-cropper', 'Integration | Component | icon cropper', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render((0, _htmlbarsInlinePrecompile['default'])(_templateObject));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render((0, _htmlbarsInlinePrecompile['default'])(_templateObject2));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('portefeuille/tests/integration/components/icon-cropper-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/icon-cropper-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/icon-cropper-test.js should pass jshint.');
  });
});
define('portefeuille/tests/integration/components/paper-file-input-test', ['exports', 'ember-qunit', 'htmlbars-inline-precompile'], function (exports, _emberQunit, _htmlbarsInlinePrecompile) {
  var _templateObject = _taggedTemplateLiteral(['{{paper-file-input}}'], ['{{paper-file-input}}']),
      _templateObject2 = _taggedTemplateLiteral(['\n    {{#paper-file-input}}\n      template block text\n    {{/paper-file-input}}\n  '], ['\n    {{#paper-file-input}}\n      template block text\n    {{/paper-file-input}}\n  ']);

  function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  (0, _emberQunit.moduleForComponent)('paper-file-input', 'Integration | Component | paper file input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render((0, _htmlbarsInlinePrecompile['default'])(_templateObject));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render((0, _htmlbarsInlinePrecompile['default'])(_templateObject2));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('portefeuille/tests/integration/components/paper-file-input-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/paper-file-input-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/paper-file-input-test.js should pass jshint.');
  });
});
define('portefeuille/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('portefeuille/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('portefeuille/tests/routes/pand/form.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/pand/form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pand/form.js should pass jshint.');
  });
});
define('portefeuille/tests/routes/pand/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/pand/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pand/index.js should pass jshint.');
  });
});
define('portefeuille/tests/routes/pand/success.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/pand/success.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pand/success.js should pass jshint.');
  });
});
define('portefeuille/tests/routes/pand.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/pand.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pand.js should pass jshint.');
  });
});
define('portefeuille/tests/services/device.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/device.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/device.js should pass jshint.');
  });
});
define('portefeuille/tests/services/head-data.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/head-data.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/head-data.js should pass jshint.');
  });
});
define('portefeuille/tests/storages/account.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | storages/account.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'storages/account.js should pass jshint.');
  });
});
define('portefeuille/tests/storages/image.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | storages/image.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'storages/image.js should pass jshint.');
  });
});
define('portefeuille/tests/test-helper', ['exports', 'portefeuille/tests/helpers/resolver', 'ember-qunit'], function (exports, _portefeuilleTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_portefeuilleTestsHelpersResolver['default']);
});
define('portefeuille/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('portefeuille/tests/unit/controllers/form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:form', 'Unit | Controller | form', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('portefeuille/tests/unit/controllers/form-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/form-test.js should pass jshint.');
  });
});
define('portefeuille/tests/unit/helpers/dom-attr-test', ['exports', 'portefeuille/helpers/dom-attr', 'qunit'], function (exports, _portefeuilleHelpersDomAttr, _qunit) {

  (0, _qunit.module)('Unit | Helper | dom attr');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _portefeuilleHelpersDomAttr.domAttr)([42]);
    assert.ok(result);
  });
});
define('portefeuille/tests/unit/helpers/dom-attr-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/dom-attr-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/dom-attr-test.js should pass jshint.');
  });
});
define('portefeuille/tests/unit/routes/form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:form', 'Unit | Route | form', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('portefeuille/tests/unit/routes/form-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/form-test.js should pass jshint.');
  });
});
define('portefeuille/tests/unit/routes/icon-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:icon', 'Unit | Route | icon', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('portefeuille/tests/unit/routes/icon-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/icon-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/icon-test.js should pass jshint.');
  });
});
define('portefeuille/tests/unit/routes/pand/form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:pand/form', 'Unit | Route | pand/form', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('portefeuille/tests/unit/routes/pand/form-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/pand/form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pand/form-test.js should pass jshint.');
  });
});
define('portefeuille/tests/unit/routes/pand-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:pand', 'Unit | Route | pand', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('portefeuille/tests/unit/routes/pand-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/pand-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pand-test.js should pass jshint.');
  });
});
define('portefeuille/tests/unit/routes/pand.success-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:pand.success', 'Unit | Route | pand.success', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('portefeuille/tests/unit/routes/pand.success-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/pand.success-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pand.success-test.js should pass jshint.');
  });
});
define('portefeuille/tests/unit/services/device-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:device', 'Unit | Service | device', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('portefeuille/tests/unit/services/device-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/device-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/device-test.js should pass jshint.');
  });
});
define('portefeuille/tests/unit/services/head-data-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:head-data', 'Unit | Service | head data', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('portefeuille/tests/unit/services/head-data-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/head-data-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/head-data-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('portefeuille/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
