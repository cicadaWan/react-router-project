export default {
  path: '/',
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        console.log('进来了')
        cb(null, require('../pages/homepage').default);
      }, 'home');
    },
  },
  component: require('../App').default,
  childRoutes: [
    require('./HomePage/index').default,
    require('./BaiDu/index').default,
    require('./LianXin/index').default,
  ]
}