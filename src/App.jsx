import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SimpleBottomNavigation from "./components/Nav";
import Header from "./components/header/Header";
import Container from "@mui/material/Container";
import Trending from "./components/pages/Trending/Trending";
import Movies from "./components/pages/Movies/Movies";
import Search from "./components/pages/Search/Search";
import Series from "./components/pages/Series/Series";
function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" exact Component={Trending} />
            <Route path="/movies" exact Component={Movies} />
            <Route path="/series" exact Component={Series} />
            <Route path="/search" exact Component={Search} />
          </Routes>
        </Container>
      </div>

      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
