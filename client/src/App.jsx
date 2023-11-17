import "./App.css";
import Header from "./components/Header/Header";
import "react-toastify/dist/ReactToastify.css";
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
