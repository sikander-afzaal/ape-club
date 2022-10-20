import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import Landing from "./pages/Landing/Landing";
import Stake from "./pages/Stake/Stake";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Landing />} path={"/"} />
        <Route element={<Stake />} path={"/staking"} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
