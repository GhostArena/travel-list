import "./App.css";
import { Navbar, Footer, Form, Lists } from "./components";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  return (
    <div className="App ">
      <Navbar />
      <Form onAddItems={handleAddItems} />
      <Lists items={items} />
      <Footer />
    </div>
  );
}

export default App;
