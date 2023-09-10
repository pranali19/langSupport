import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

// main app

function App() {
  // use translation hook from i18n

  const { t, i18n } = useTranslation("translation");
  const [currentLang, setCurrentLang] = useState("en");

  // function to handle language change

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
  };

  // changing language on radio button value change

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
