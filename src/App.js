import Counter from "pages/Counter";
import Main from "pages/Main";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Footer from "./components/commons/Footer"; // components 폴더만들고 넣기
// import Header from "./components/commons/Header";

//return 에는 최상단 태그 하나만 가능 ctrl alt l 자동정렬
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/counter/:seq"} element={<Counter />} />
        <Route path={"*"} element={<div>페이지가 없습니다.</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// 레파지토리 만들고 > git init > >git add . > git commit -m "first" > git push origin master >
