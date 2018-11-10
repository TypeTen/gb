import DS from 'ember-data';

export default DS.Model.extend({
  size: DS.attr(),
  title: DS.attr(),
  author: DS.attr(),
  meta: DS.attr(), // date: DS.attr(), tags: DS.attr(),
  content: DS.attr() // images: DS.attr(), text: DS.attr()
});
