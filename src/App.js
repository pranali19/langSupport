import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function App() {
  const { t, i18n } = useTranslation("translation");
  const [currentLang, setCurrentLang] = useState("en");

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
  };
  useEffect(() => {
    changeLanguageHandler(currentLang);
  }, [currentLang]);
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <div className="content">
          <Header
            t={t}
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
          />
          <Main t={t} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
