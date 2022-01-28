import TodoList from "./components/TodoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import LandingPage from "./views/LandingPage";
import NavBar from "./components/NavBar";
import User from "./views/User";
import Error from "./views/Error"
import GoHome from "./components/GoHome";


function App() {
  
  return (
    <div> 
       <BrowserRouter>

        <NavBar />

        <Routes>
            <Route path="/" element={ <LandingPage/> }/>
            <Route path="/list" element={ <TodoList /> }/>
            <Route path="/home" element={ <Home/> }/>

            <Route path="/user/:username" element={ <User/> }/>
            <Route path="/about" element={ <About/> }/>
            
            <Route path="*" element={<Error />} />
        </Routes>

        <GoHome />

       </BrowserRouter>
     </div>
  );
}

export default App;