import Header from "./Header.js";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../utils/userContext.js";
import store from "../utils/Store.js";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <AuthProvider>
          <Header />
          <Outlet />
          <Footer />
        </AuthProvider>
      </Provider>
    </div>
  );
};

export default App;
