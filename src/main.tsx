import React from 'react'
import ReactDOM from 'react-dom/client'
import Player from './components/Player'
import 'virtual:windi.css'
import '@/assets/css/base.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Player />
)
//TODO:数据持久化（我听过的模块）
//TODO:考虑将dom中的windicss属性每个都放到对象中，通过解构来传
// import 'virtual:windi.css'
// import '@/assets/css/base.css'
// export { default as Player } from './Player'
