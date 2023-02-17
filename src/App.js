
import './App.css';
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div style={{flex: "1"}}>
        <NavigationMenu />
      </div>
      <div style={{flex: "2"}}>
      <Footer />
      </div>
    </div>
  );
}

export default App;
