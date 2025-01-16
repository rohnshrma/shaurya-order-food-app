import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Components/Menu";
import { menuData } from "./data";

function App() {
  console.log("Data => ", menuData);

  return (
    <div className="App container">
      Food Order App
      <Menu
        menuItems={menuData}
        addToCart={() => {
          console.log("adding");
        }}
      />
    </div>
  );
}

export default App;
