import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import ArticlesDetails from "./pages/ArticlesDetails";

function App() {
  return (
    <>
      {/* Main Container */}
      <div>
        <Routes>
          <Route path="/articlesDetails" element={<ArticlesDetails />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
