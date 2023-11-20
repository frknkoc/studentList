import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Home from './Home';
import StudentsView from './component/student/StudentsView';
import Navbar from "./component/common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./component/student/AddStudent";
import AboutUs from "./component/AboutUs";
import Footer from "./component/common/Footer";

function App() {
  return (
    <main className="App">
      
      
      <Router>
      <Navbar />
      <div className="container">
        <Routes >
        <Route
            exact
            path="/about-us"
            element={<AboutUs />}
          >
          </Route>
          <Route
            exact
            path="/"
            element={<Home />}
          >
          </Route>
          <Route
            exact
            path="/view-students"
            element={<StudentsView />}
          >
          </Route>

          <Route
            exact
            path="/add-student"
            element={<AddStudent />}
          >
          </Route>
        </Routes>
        </div>
        <Footer />
      </Router>


    </main>
  );
}

export default App;
