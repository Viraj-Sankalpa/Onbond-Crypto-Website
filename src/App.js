import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AboutHome from "./components/about-home/AboutHome";
import ScrollToTop from "./helpers/ScrollToTop";
import About from "./pages/About";
import AboutBitcoin from "./pages/AboutBitcoin";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogRightSidebar from "./pages/BlogRightSidebar";
import Contact from "./pages/Contact";
import ContactForm from "./pages/ContactForm";
import FAQ from "./pages/FAQ";
import HomeOne from "./pages/HomeOne";
import LoginRegister from "./pages/LoginRegister";
import Merchants from "./pages/Merchants";
import NotFound from "./pages/NotFound";
import Sectors from "./pages/Sectors";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Team from "./pages/Team";
import Wallet from "./pages/Wallet";
import WhatWeDo from "./pages/WhatWeDo";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={HomeOne}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/home-one"}`}
            component={HomeOne}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/about-home"}`}
            component={AboutHome}
          />
          
          <Route
            path={`${process.env.PUBLIC_URL + "/about"}`}
            component={About}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/whatwedo"}`}
            component={WhatWeDo}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/about-bitcoin"}`}
            component={AboutBitcoin}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog"}`}
            component={Blog}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-right-sidebar"}`}
            component={BlogRightSidebar}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-post"}`}
            component={BlogPost}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/service"}`}
            component={Service}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/service-details"}`}
            component={ServiceDetails}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/merchants"}`}
            component={Merchants}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/team"}`}
            component={Team}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/wallet"}`}
            component={Wallet}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/sectors"}`}
            component={Sectors}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/login-register"}`}
            component={LoginRegister}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/not-found"}`}
            component={NotFound}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact-form"}`}
            component={ContactForm}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/faq"}`}
            component={FAQ}
          />
          <Route exact component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
