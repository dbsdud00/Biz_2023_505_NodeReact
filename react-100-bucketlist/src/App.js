import logo from "./logo.svg";
import "./css/App.css";
import BucketMain from "./comps/BucketMain";
import Footer from "./comps/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BucketMain />
      <Footer />
    </div>
  );
}

export default App;
