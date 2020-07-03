import './set-public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './root.component';

// eslint-disable-next-line no-undef

function domElementGetter() {
  let el = document.getElementById('root');
  if (!el) {
    el = document.createElement('div');
    el.id = 'root';
    document.body.appendChild(el);
  }
  return el;
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary() {
    return React.createElement('div', null, 'error');
  },
  domElementGetter,
});

export const { bootstrap, mount, unmount } = lifecycles;
export { links } from './root.helper';

export const devtools = {
  overlays: {
    selectors: ['.root.dashboardHeight'],
    options: {
      color: 'red',
    },
  },
};
