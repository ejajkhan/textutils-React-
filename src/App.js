import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
function App() {
  var appname="TextUtils";
  return (
    <div className="App">
      <Navbar Name={appname}></Navbar>

      <About/>
     <TextForm/> 
      
    </div>
  );
}

export default App;
