import React, { useState } from "react";

//components
import Header from "./components/header";
import Catalog from "./components/catalog";
import Footer from "./components/footer";

//css
import "./assets/css/main.css";
import "./assets/css/header.css";
import "./assets/css/footer.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Catalog />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count Up To The Moon</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <Footer />
    </div>
  );
}

export default App;
