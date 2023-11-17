import "./App.css";
import AddRestaurent from "./components/AddRestaurent/AddRestaurent";
import Header from "./components/Header/Header";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <>
      <Header />
      <PageRoutes />
    </>
  );
}

export default App;
