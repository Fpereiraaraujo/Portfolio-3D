import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import {  Navbar } from "./components";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={"/"} />
                  <Route path='/projects' element={"/"} />
                  <Route path='/contact' element={<Contact/>} />
                </Routes>
                {/* <Footer /> */}
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
