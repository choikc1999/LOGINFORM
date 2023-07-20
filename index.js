// index.js

// 모듈 변수 선언
const express = require("express");
const app = express();
const prot = 8080;
const bodyParser = require("body-parser");

//view는 ejs 확장자를 사용할거다
app.set("view engine", "ejs"); 

// static = "정적인"이라는 뜻 
// static은 변화를 줄 수 없는 파일들을 의미한다.
// uploads 폴더에서 정적파일을 로드할 수 있다.
app.use( express.static( "uploads" ));

// 요청 본문의 있는 데이터를 해석해서 req.body(bodyParser) 객체로 만들어주는 미들웨어
// 미들웨어는 빠르게 중간에서 길잡이를 해주어 원하는 기능을 편하게 필터해주는 기능
// 요청 본문에 있는 데이터는 항상 URL-encodede라는 문자열로 들어오는데
// 데이터로 사용하기엔 객체로 변환이 필요
app.use(express.urlencoded({extended:true}));

// URL-encodede라는 문자열을 json파일 형식으로 받을것이다.
// bodyParser는 json파일으로 받을 것이다
// json이라는 파일형식은 데이터를 저장하는 방법중 하나
// 우리가 전달받을 bodyParser는 회원가입때 인풋에 적은 것들이 될 것이다.
app.use( bodyParser.json() );

// 우리는 router이라는 변수를 촤상위 router폴더안에 시작경로를 지정할 것이다.라는 뜻으로 해석
const router = require("/");
app.use("/index.html", router);

// 서버오픈시 포트번호 알려줌
app.listen(prot, () => {
    console.log(  "Server Port: ", port);
})