export default {
  path: 'lianxin',
  getComponent(nextProps, cb) {
    require.ensure(
      [],
      require => {
        cb(null,require('../../pages/lianxin').default)
      },
      'lianxin'
    )
  }
}