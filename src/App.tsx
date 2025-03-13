import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import SignIn from "@/pages/SignIn";
import Home from "@/pages/Home";
import "@/App.css"

function App() {
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
