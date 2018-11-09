import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | shrines', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:shrines');
    assert.ok(route);
  });
});
