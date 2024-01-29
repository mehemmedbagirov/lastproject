import React, { useState, useEffect } from "react";
import { Route, Routes,useNavigate } from "react-router-dom";
import Login from "./Pages/Auth/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard"
import Register from "./Pages/Auth/Register/Register";
import Register2 from "./Pages/Auth/Register2/Register2";
import Contact from "./Pages/Contact/Contact";
import Doctors from "./Pages/Doctors/Doctors";
// import Tracker from "./Pages/Tracker/Tracker";
import { IntlProvider } from 'react-intl';
import Azerbaijan from './Language/Az.json'; // import your translation files
import English from './Language/en.json'
import LanguageSelector from "./Language/LanguageSelectors";

function App() {
  const [locale, setLocale] = useState('en'); // state for current locale

  const handleLanguageChange = (selectedLocale) => {
    setLocale(selectedLocale);
  };
  //const messages = Azerbaijan; // get the translations for the locale
  const navigate = useNavigate();
  const [Auth, setAuth] = useState(true)
  const [path, setPath] = useState("/")
  // // console.log("Render olundu");

  useEffect(() => {
    if (Auth == false) {
      setPath("/login")
      navigate(path);
    }else {
      setPath("/")
      navigate(path);
    }
  }, [Auth,path]);
 
  
  let lang;
  if (locale === "en"){
      lang = English;
  } else {
    lang = Azerbaijan;
  }

  console.log(lang["Header"]);
  

  return (
    <>
    <IntlProvider locale={locale} messages={lang}>
      <LanguageSelector onLanguageChange={handleLanguageChange} />
      { !Auth? 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register2" element={<Register2 />} />
      </Routes>

       : 

      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/Contact" element={<Contact />} /> 

        {/* <Route path="/contact" element={<Contact/>}/>
          <Route path="/doctors" element={<Doctors/>}/>
          <Route path="/tracker" element={<Tracker/>}/> */}
      </Routes>
      } 
    </IntlProvider>
    </>
  );
}

export default App;
