import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';

import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import routes from './routes';


ReactDOM.render(
  <LocaleProvider locale={zh_CN}>
    <Router history={browserHistory} routes={routes}></Router>
  </LocaleProvider>,
  document.getElementById('root')
)