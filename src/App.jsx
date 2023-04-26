import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MapRender from "./components/Map/MapRender";

function App() {
  return (
    <div className="App">
      <Header />
      <MapRender />
      <Footer />
    </div>
  );
}

export default App;
