import _ from 'lodash';
require('./scss/styles.scss');

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work.
  element.innerHTML = _.join(['hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
