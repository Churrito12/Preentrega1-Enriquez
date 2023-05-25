import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";

const App = () => {
  const [nombre, setNombre] = useState("pepe");
  const [isDark, setIsDark] = useState(false);

  console.log(isDark);
  let edad = 23;

  return (
    <div>
      <Navbar />
      <ItemListContainer nombre={nombre} edad={edad} />
      <button
        onClick={() => {
          setNombre("maria");
        }}
      >
        cambiar nombre
      </button>
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
      >
        Cambiar a {isDark ? "claro" : "oscuro"}
      </button>
    </div>
  );
};

export default App;
