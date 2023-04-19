import "./App.scss";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "./components/componentsCss/Background.scss";
import bgimg from "./assets/Map-Milky-Way.png";
import SearchBar from "./components/Search";

function App() {
  return (
    <div>
      <Header />
      <main>
        <img src={bgimg} alt="Milky Way" />
        <SearchBar />
      </main>

      <Footer />
    </div>
  );
}

export default App;
