import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { IntlProvider } from "react-intl";
import Layout from "./components/Layout";
import Loadable from "react-loadable";
import Videos from "./Pages/Videos";
import Topics from "./Pages/Topics";
import Pictures from "./Pages/Pictures";
import Live from "./Pages/Live";

// Çeviri dosyalarını içe aktarın
import enMessages from "./locales/en.json";
import trMessages from "./locales/tr.json";

// Dinamik olarak içe aktarılacak bileşenler
const About = Loadable({
  loader: () => import("./Pages/About"),
  loading: () => <div>Loading...</div>,
});

function App() {
  const [userLocale, setUserLocale] = useState("en");

  const handleLocaleChange = () => {
    const newLocale = userLocale === "tr" ? "en" : "tr";
    setUserLocale(newLocale);
  };

  // Kullanıcı diline göre çevirileri seçin
  const messages = userLocale === "tr" ? trMessages : enMessages;

  // Layout bileşenini useMemo ile oluşturun
  const layoutComponent = useMemo(() => {
    return <Layout userLocale={userLocale} onLocaleChange={handleLocaleChange} />;
  }, [userLocale]);

  return (
    <IntlProvider locale={userLocale} messages={messages}>
      {layoutComponent}
      <Router>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Videos" element={<Videos />} />
          <Route exact path="/Topics" element={<Topics />} />
          <Route exact path="/Pictures" element={<Pictures />} />
          <Route exact path="/Live" element={<Live />} />
        </Routes>
      </Router>
    </IntlProvider>
  );
}

export default App;