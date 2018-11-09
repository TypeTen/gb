import Component from '@ember/component';

export default Component.extend({
  tagName: 'a',
  classNames: ['toggle'],
  attributeBindings: ['href','id'],
  href: '#',
  id: ''
});
