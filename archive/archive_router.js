import navData from './nav_config.json';
console.log('导航',navData)
const LOAD_MAP = {
    'zh': name => {
      return r => require.ensure([], () =>
        r(require(`./pages/zh/${name}.vue`)),
      'zh');
    }
  };
  // const LOAD_DOCS_MAP = {
  //   'zh': path => {
  //     return r => require.ensure([], () =>
  //       r(require(`./docs/zh${path}.md`)),
  //     'zh-CN');
  //   }
  // };
  // const loadDocs = function(lang, path) {
  //   return LOAD_DOCS_MAP[lang](path);
  // };
const load = function(lang, path) {
    return LOAD_MAP[lang](path);
  };
const generateMiscRoutes = function(lang) {
  let indexRoute = {
      path: `/${ lang }`, // 首页
      name: 'home' + lang,
      component: load(lang, 'index')
  };
  return [indexRoute];
};
const genarateRoute = (navData) => {
  let route = [];
  Object.keys(navData).forEach((lang, index) => {
    let navs = navData[lang];
    route.push({
      path: `/${ lang }/component`,
      // redirect: `/${ lang }/component/installation`,
      component: load(lang, 'component'),
      children: []
    });
  });
  // function addRoute(page, lang, index) {
  //   const component = page.path === '/changelog'
  //     ? load(lang, 'changelog')
  //     : loadDocs(lang, page.path);
  //   let child = {
  //     path: page.path.slice(1),
  //     meta: {
  //       title: page.title || page.name,
  //       description: page.description,
  //       lang
  //     },
  //     name: 'component-' + lang + (page.title || page.name),
  //     component: component.default || component
  //   };

  //   route[index].children.push(child);
  // }

  return route;
};
let route = genarateRoute(navData);
console.log(221323,route)
route = route.concat(generateMiscRoutes('zh'));
export default route