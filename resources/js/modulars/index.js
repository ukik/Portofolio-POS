const PageLogin = resolve => {
    require.ensure(
      ['../components/pages/login'],
      () => {
        resolve(require('../components/pages/login'))
      }, 'pages/login'
    )
}
  
module.exports = {
    PageLogin
}