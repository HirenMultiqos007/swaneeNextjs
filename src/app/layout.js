"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import "public/assets/css/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-loading-skeleton/dist/skeleton.css'
import "nouislider/distribute/nouislider.css";


import { Provider } from "react-redux";
import store from "../app/Redux-Toolkit/store";


export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
