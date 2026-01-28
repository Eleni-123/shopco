import SignUpBanner from "./components/SignUpBanner";
import "./App.css";
import CategoriesBar from "./components/CategoriesBar";
import MainSection from "./components/MainSection";
import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";
import Styles from "./components/Styles";
// import { Provider } from "react-redux";
// import { store } from "./store/store";

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <SignUpBanner />
      <CategoriesBar />
      <MainSection />
      {/* </Provider> */}
      <NewArrivals />
      <TopSelling />
      <Styles />
    </>
  );
}

export default App;
