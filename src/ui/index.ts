const Koa = require('koa')
const render = require('koa-ejs')
const path = require('path')
const koaStatic = require('koa-static')

const app = new Koa()

const TITLE_MAP: {
  [key: string]: string
} = {
  '/': 'Leon的node小工具'
}

console.log(__dirname, '__dirname')
render(app, {
  root: path.join(__dirname, '../../public'),
  layout: 'index',
  viewExt: 'ejs',
  cache: false,
  debug: false,
});

app.use(koaStatic(path.join(__dirname, '../../public')))

// app.use(function (ctx: any, next: any) {
//   console.log(123123123)
//   ctx.state = ctx.state || {};
//   ctx.state.now = new Date();
//   ctx.state.ip = ctx.ip;
//   ctx.state.version = '2.0.0';
//   return next();
// });

app.use(async function (ctx: any) {
  // console.log(ctx, 'ctx')
  console.log(ctx.request.url, 'ctx')
  await ctx.render('index', {
    title: TITLE_MAP[ctx.request.url]
  });
});

if (process.env.NODE_ENV === 'test') {
  module.exports = app.callback();
} else {
  app.listen(7001);
  console.log('open http://localhost:7001');
}

app.on('error', function (err: any) {
  console.log(err.stack)
});