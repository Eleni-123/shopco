import "./App.css";
import CategoriesBar from "./components/CategoriesBar";

function App() {
  return (
    <div className="App">
      <CategoriesBar />
      <main>
        <TopContent />
        <NewArrivals />
      </main>
    </div>
  );
}

export default App;
