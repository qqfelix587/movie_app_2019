import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />   

    {/* 컴포넌트는 기본적으로 html을 반환하는 함수임. 
      jsx : react의 유일한 html과 js 사이의 이러한 조합/ jsx는 js 안의 html임.component를 만들고 어떻게 사용하는지에 대한 것. 
    */}
    {/* jsx 요소는 오직 하나만 가질 수 있음. ex )  <App /><Potato />불가*/}
  
  </React.StrictMode>,
  document.getElementById('potato')
  // index.html의 root 라는 id를 가진 
  // 컴포넌트내에 모든 react 파일 상의 html로 만든 것들을 집어넣음
);
