// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponent/Header";
import Todos from './MyComponent/Todos';
import AddTodo from './MyComponent/AddTodo';
import About from './MyComponent/About';
import Footer from './MyComponent/Footer';
import React, {useState, useEffect, useLayoutEffect, useInsertionEffect} from 'react';
import {BrowserRouter , Route, Routes } from "react-router-dom";
import { Switch } from 'react-router-dom';
import Home from './pages/Home';
import New from './MyComponent/New'






function App() {
  
  return (
    <>
    <BrowserRouter>
    {/* // present in all */}
    <Header title="this to do"   searchBar={false}/>
      <Routes>
        <Route exact path = "/" element={<Home></Home>}></Route>
        <Route exact path = "/test" element={<New/>}></Route>
        <Route exact path = "/about" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
    </>

  );
}

{/* <Router>
<Header title="this to do"   searchBar={false}  />
<Switch>
      <Route exact path="/" render={()=>{
        return (
          <>
         <AddTodo addTodo={addTodo}/>
         <Todos todos={todos} onDelete={onDelete}/>
         </>)
      }}>
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
  </Switch>
<Footer />
</Router> */}

export default App;
