var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title2'
  };

  await ctx.render('index', {
  });
})
module.exports = router;
