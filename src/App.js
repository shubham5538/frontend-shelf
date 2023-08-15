import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Book/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/Book/About";
import BookDetail from "./components/Book/BookDetail";
// import Login from "./components/Book/Login";
// import SignUp from "./components/Book/Signup"; 


function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/about" element={<About/>} exact />
          <Route path="/add" element={<AddBook/>} exact />
          <Route path="/books" element={<Books/>} exact />
          <Route path="/books/:id" element={<BookDetail/>} exact />
          {/* <Route path="/login" element={<Login />} exact />
          <Route path="/signup" element={<SignUp />} exact /> */}


        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
