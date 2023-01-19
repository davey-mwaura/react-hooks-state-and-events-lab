import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  // event handler for toggling dark mode
  // replace 'false' with a state variable that can be toggled between true and false
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const appClass = darkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
