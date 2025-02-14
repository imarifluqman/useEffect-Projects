import "./App.css";
import { data } from "./data/data";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <div className="main-body">
      <div className="main-header">

      <h1>UseEffect Projects...!</h1>
      </div>
      <div className="main-container">
        {data.map((item) => (
          <Link to={item.link} key={item.id} style={{ textDecoration: "none" }}>
            <div className="card-container">
              <div className="image-container">
                <img src={item.image} alt={item.name} className="image-box" />
              </div>
              <div>
                <h1 className="main-heading">{item.name}</h1>
                <button className="main-btn" style={{ backgroundColor: item.bgColor, color: item.color }}>{item.button}</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
