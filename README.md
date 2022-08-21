# Movie App 2020

React JS Fundamentals Course 2020

## 08-2. 라우터 오류
HashRouter를 사용하면서 생긴 오류 주로 버전이 달라서 발생했다

### #hash가 url에 안붙는다.
- 오류도 안나오고 원인이나 해결방법 못 찾음
- 이후 url에 #을 직접 붙여줘야 함

### Uncaught Error: A \<Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your \<Route> in a \<Routes>
- \<Routes>로 감싸주고
component={About} -> element={\<Home/>}

 ```javascript
<Route  path="/about"  element={<About/>}/>
```
### Uncaught Error: [h1] is not a \<Route> component. All component children of \<Routes> must be a <Route> or <React.Fragment> 오류

버전 문제로 \<Route> 내에서 \<h1>을 사용할 수 없음
-  ```<Route  path="/home"  element={\<h1>Home</h1>}/>```
- 이런 식으로 element로 사용 가능

>책은 react 16버전인 것 같고 [다운그레이드](https://rosedaily101.tistory.com/51?category=960490) 하려면 react-router-dom도 5버전으로 같이 [다운그레이드](https://rosedaily101.tistory.com/59?category=960490) 해줘야 한다고 함


> p.216 /home/introduction에 접속하면 Home과 Instroduction이 같이 출력된다고 하지만 Instroduction만 출력됨
> 아마 버전이 바뀌면서 뒷장에 나오는 exact={true}가 기본값이 된 듯

## 08-3. 내비게이션

router 부분을 책과 다르게 진행하면서 내비게이션 부분도 헷갈려서 정리

- \<Navigation/>은 \<HashRouter> 밑에, \<Routes> 위에
```javascript
function  App() {
	return(
		<HashRouter>
			<Navigation/>
			<Routes>
				<Route  path="/"  element={<Home/>}/>
				<Route  path="/about"  element={<About/>}/>
			</Routes>
		</HashRouter>
	);
}
```
### props 콘솔에서 받아볼 때 prototype어쩌구만 나오고 history, location 등등 안나옴
- react-router-dom v6가 되면서 useLocation 사용
- Navigation.js, About.js 파일 수정

react-router-dom v5 (책)
Navigation.js 
```javascript
import  React  from  "react";
import {Link} from  'react-router-dom';
import  './Navigation.css';
  
function  Navigation(){
	return (
		<div  className="nav">
		<Link  to="/">Home</Link>
		<Link  to={{pathname:  '/about', state: {fromNavigation:true}}}>About</Link>
		</div>
	);
}

export  default  Navigation;
```
About.js
```javascript
import React from "react";
import './About.css'

function About(props){
    console.log(props);

    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus two make four. If that is granted, all else follow."
            </span>
            <span>- George Orwell, 1984</span>
        </div>  
    );
}

export default About;
```
react-router-dom v6
Navigation.js
```javascript
import React from "react";
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation(){
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to={'/about'} state={{fromNavigation: true}}>About</Link>
        </div>
    );
}

export default Navigation;
```
About.js
```javascript
import React from "react";
import './About.css'
import { useLocation } from "react-router-dom";

function About(props){
    const location = useLocation();
    console.log(location);

    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus two make four. If that is granted, all else follow."
            </span>
            <span>- George Orwell, 1984</span>
        </div>  
    );
}

export default About;
```

## 08-5. 리다이렉트
### v5의 history 대신 v6의 useNavigate()를 이용한 redirect
location, history 접근을 위해서 ```useLocation(), useNavigate()```를 사용했는데 class로 만드니 오류도 나고 v6은 functional 위주인 것 같으니까 함수로 작성함
- ```componentDidMount() -> useEffect()```
- ```history.push('/') -> navigate('/');```

Detail.js
```javascript
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() =>{
    if (location.state == undefined){
      navigate('/');
    }
  }, []);

  if (location.state){
    return (
      <span>
        {location.state.title}    
      </span>
    );
  } else{
    return null;
  }
}

export default Detail;
```

## 그 외

- 줄바꿈 경고
```
$ git add 
warning: LF will be replaced by CRLF in 파일명
```
```
$ git config --global core.autocrlf true
```
- 동기화 오류
```
$ git push origin master
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to '---.git'
```
```
#강제 push 이전 파일이 다 날라간다
$ git push origin +master 
or
#동기화 방법이라는데 안해봄
$ git pull --rebase origin master
```
- README.md는 파일로 작성하기
