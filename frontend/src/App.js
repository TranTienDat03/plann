import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import About from "./components/About";
import Home from "./components/Home";
import Plan from "./components/Plan";
import Login from "./components/Login";
import Register from "./components/Register";
import Stats from './components/Stats'; // Import component Stats
import { TasksProvider } from "./context/authContext";

function App() {
  
  return (
    <TasksProvider>
    <div className="App">
        <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/login" element={<Login />} />       {/* Thêm route đăng nhập */}
          <Route path="/register" element={<Register />} /> {/* Thêm route đăng ký */}
          <Route path="/stats" element={<Stats />} /> {/* Thêm route cho Stats */}
          <Route path="*" element={<Home />} /> {/* Route mặc định */}
        </Routes>
      </Router>
    </div>
    </TasksProvider>
  );
}

export default App;
