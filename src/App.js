import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import ReactQueryPage from "./ReactQueryPage";

function App() {
  return (
    <div className="App">
      <nav
        style={{
          backgroundColor: "beige",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        <Link to="/" style={{ marginRight: "10px" }}>
          HomePage
        </Link>
        <Link to="/react-query">React Query</Link>
      </nav>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/react-query" element={<ReactQueryPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
