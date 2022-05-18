import "../styles/globals.css";
import store from "../store/store";
import { Provider } from "react-redux";
import axios from "axios";

axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
