import Exercise from "./Exercises";
import Helloworld from "./Exercises/e5/hello-world";
import Tuiter from "./Exercises/tuiter";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <text style={{ fontWeight: "bold", color: "black" }}>
              Eswar Divi
            </text>
          </div>
        </div>
        <Routes>

          
          <Route path="/*" element={<Exercise />} />
          <Route path="/hello" element={<Helloworld />} />
          <Route path="/Tuiter" element={<Tuiter />} />
        </Routes>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
