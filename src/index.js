/* 文件自动生成 by './build/bin/build-entry.js' */

import Button from '../packages/button/index.js';
import Alert from '../packages/alert/index.js';

const components = [
  Button,
  Alert
];

const install = function(Vue, opts = {}) {

  components.forEach(component => {
    Vue.component(component.name, component);
  });


};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.1.4',
  install
};
