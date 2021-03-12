import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheet.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Service Workerが有効なブラウザである場合のみ実行
if ("serviceWorker" in navigator) {
  // Service Workerの登録
  // register()の引数にはService Workerの処理が書かれたファイルのpathを指定
  navigator.serviceWorker
    .register("./service-worker.js")
    .then(function (registration) {
      console.log("Success ! Scope: ", registration.scope);
    })
    .catch(function (err) {
      console.log("Failed ! Error: ", err);
    });
}

ReactDOM.render(
  <App />,                       // Appコンポーネントを
  document.getElementById('root')       // id='root'の要素にrenderする
);


serviceWorkerRegistration.register();