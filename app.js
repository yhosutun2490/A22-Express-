//導入express 框架
const express = require('express')
const app = express()
// 導入樣板引擎
const exphbs = require('express-handlebars')
// 設定伺服器port和主機名
const hostname = 'localhost'
const port = 3000
// 樣板引擎基本設定
app.engine('handlebars', exphbs({ defaultLayout: 'main' })) //預設顯示的主模板名稱
app.set('view engine', 'handlebars') //如果沒設定樣板引擎，預設是pug
//設定相關路由
app.get('/', (req, res) => {
  res.send('HI I AM Rafael')
})
//監聽伺服器
app.listen(3000, () => {
  console.log(`you are listening on ${hostname} en port ${port}`)
})