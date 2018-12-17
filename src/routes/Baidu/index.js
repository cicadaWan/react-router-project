export default {
  path: 'baidu',
  getComponent(nextProps, cb) {
    require.ensure(
      [],
      require => {
        console.log('点击百度')
        cb(null,require('../../pages/baidu').default)
      },
      'baidu'
    )
  }
}