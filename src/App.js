import "./App.css";
import { Navbar, Footer, Form, Lists } from "./components";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  // const [isTicked, setIsTicked] = useState(false);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleTicked = (id) =>
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="App ">
      <Navbar />
      <Form onAddItems={handleAddItems} />
      <Lists items={items} onDeleteItem={handleDelete} onTick={handleTicked} />
      <Footer />
    </div>
  );
}

export default App;
