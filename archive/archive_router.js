import navData from './nav_config.json';
const LOAD_MAP = {
    'zh': name => {
      return r => require.ensure([], () =>
        r(require(`./pages/zh/${name}.vue`)),
      'zh');
    }
  };
const LOAD_DOCS_MAP = {
  'zh': path => {
    return r => require.ensure([], () =>
      r(require(`./docs/zh${path}.vue`)),
    'zh');
  }
};
const loadDocs = function(lang, path) {
  return LOAD_DOCS_MAP[lang](path);
};
const load = function(lang, path) {
    return LOAD_MAP[lang](path);
  };
const generateMiscRoutes = function(lang) {
  let indexRoute = {
      path: `/${ lang }`, // 首页
      name: 'home' + lang,
      component: load(lang, 'index')
  };
  let aboutRoute = {
    path: `/${ lang }/about`, // 资源
    meta: { lang },
    name: 'about' + lang,
    component: load(lang, 'about')
  };
  let feedbackRoute = {
    path: `/${ lang }/feedback`, // 资源
    meta: { lang },
    name: 'feedback' + lang,
    component: load(lang, 'feedback')
  };
  return [indexRoute,aboutRoute,feedbackRoute];
};
//生成组件路由
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
    //各个组件的路由
    navs.forEach(nav => {
      if (nav.href) return;
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(nav => {
            addRoute(nav, lang, index);
          });
        });
      } else if (nav.children) {
        nav.children.forEach(nav => {
          addRoute(nav, lang, index);
        });
      } else {
        addRoute(nav, lang, index);
      }
    });
  });
  function addRoute(page, lang, index) {
    const component = loadDocs(lang, page.path);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang
      },
      name: 'component-' + lang + (page.title || page.name),
      component: component.default || component
    };

    route[index].children.push(child);
  }

  return route;
};
let route = genarateRoute(navData);

route = route.concat(generateMiscRoutes('zh'));
console.log(123213,route)
export default route