import AllCollections from "./components/AllCollections";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PopularCollection from "./components/PopularCollection";
import Showroom from "./components/Showroom";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="App">
      <div className="fixed w-full z-50 bg-white">
        <Navbar />
      </div>
      <Header />
      <PopularCollection />
      <Trending />
      <AllCollections />
      <Showroom />
      <Footer />
    </div>
  );
}

export default App;
