// 導入express 框架
const express = require('express')
const app = express()
// 導入樣板引擎
const exphbs = require('express-handlebars')
// 設定伺服器port和主機名
const hostname = 'localhost'
const port = 3000
// 樣板引擎基本設定
app.engine('handlebars', exphbs({ defaultLayout: 'main' })) // 預設顯示的主模板名稱
app.set('view engine', 'handlebars') // 如果沒設定樣板引擎，預設是pug
// 建立靜態資料夾路徑
app.use(express.static('public'))
// 設定相關路由
let pointer = {}
app.get('/', (req, res) => {
  res.render('index')
})
app.get('/:page', (req, res) => {
  if (req.params.page) {
    pointer = {}
    pointer[req.params.page] = 'onclick'
    res.render(req.params.page, { pointer: pointer })
  }
})

// 監聽伺服器
app.listen(3000, () => {
  console.log(`you are listening on ${hostname} en port ${port}`)
})