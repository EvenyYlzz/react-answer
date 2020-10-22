import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'antd-mobile';

//  样式全导入
// import 'antd-mobile/dist/antd-mobile.css';

//  1.进行自动按需加载、引入样式，安装插件完成，具体查看官方文档
//  npm install babel-plugin-import --save
//  2.配置
//  - ①npm run eject 敲入命令获取所有的配置
//  - ②package.json 拉到最后看到babel进行配置
//  3.配置完成后不需要再进行样式导入问题



//  安装antd-mobile
//  npm install antd-mobile --save

ReactDOM.render(
  <Button>Start</Button>,
  document.getElementById('root')
);

