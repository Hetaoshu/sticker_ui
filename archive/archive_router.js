const LOAD_MAP = {
    'zh': name => {
      return r => require.ensure([], () =>
        r(require(`./pages/zh/${name}.vue`)),
      'zh');
    }
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

return [indexRoute];
};
let route = [];
route = route.concat(generateMiscRoutes('zh'));
export default route