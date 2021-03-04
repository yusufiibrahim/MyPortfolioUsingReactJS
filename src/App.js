import "./App.css";

// components
import MyNavbar from "./components/myNavbar/myNavbar";
import MyCarousel from "./components/myCarousel/myCarousel";
import TitleMessage from "./components/titleMessage/titleMessage";

const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
    </div>
  );
};

export default App;
