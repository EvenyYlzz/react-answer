import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import store from './store/data'
import App from './views/App'
import './assets/css/style.css'
// import axios from 'axios'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)


// //  样式全导入
// // import 'antd-mobile/dist/antd-mobile.css';

// //  1.进行自动按需加载、引入样式，安装插件完成，具体查看官方文档
// //  npm install babel-plugin-import --save
// //  2.配置
// //  - ①npm run eject 敲入命令获取所有的配置
// //  - ②package.json 拉到最后看到babel进行配置
// //  3.配置完成后不需要再进行样式导入问题

// //  安装antd-mobile
// //  npm install antd-mobile --save

// // 项目数据
// //  1.数据导入
// //  quizzes.json 文件导入到数据库。创建数据库，右键点击表，选择导入文件，文件导入json文件，后面全都是点击下一步，最后点击完成
// //  2.创建服务器
// //  npm init
// //  npm install express --save
// //  npm install mysql --save
// //  3.创建index.js

// //  安装 axios
// //  npm install axios --save
// //  安装  react-router-dom
// //  npm install react-router-dom --save
// //  安装 redux
// //  npm install redux --save
// //  安装 react-redux
// //  npm install react-redux --save

//  provider组件：
//    自动得将store里的state和组件进行管理


