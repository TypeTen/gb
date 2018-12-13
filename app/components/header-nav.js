import Component from '@ember/component';

export default Component.extend({
  tagName: 'nav',
  classNames: ['nav preload'],
  attributeBindings: ['id'],
  id: 'nav'
});

window.onload = function(){
  let classflag = document.getElementsByClassName("ember-view");
  console.log(classflag);
  if (typeof(classflag) != 'unefined') {
    classflag.classList.remove("ember-view");
  }
};
