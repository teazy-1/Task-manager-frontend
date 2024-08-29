import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import MyTask from "./pages/MyTask";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import NavBar from "./components/NavBar";

function App() {
  const baseURL =
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/tasks" element={<MyTask />} />
          <Route path="/new" element={<NewTask />} />
          <Route path="/edit" elemnt={<EditTask />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


//Netlify,vercel,render e.t.c are popular free cloud platforms for hosting web applications.

// Netlify is best for static sites and applications with a focus on simplicity and serverless functions .

// Vercel is optimixed for front end development especially those using react and next.js with strong serverless and edge capabilities 

// Render is a versertile platform suitable for full stack applications offering more flexible in terms of supported frameworks, database and back end services