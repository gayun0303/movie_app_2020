import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; //App 컴포넌트 임포트해서

//앱 컴포넌트 사용
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);

//컴포넌트가 그려질 위치 = root 엘리먼트
//OR
// ReactDOM.render(<App />, document.getElementById('root'));