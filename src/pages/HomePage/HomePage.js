import "./HomePage.css";

import { useLanguage } from '../../contexts/LanguageContext';


function HomePage() {
  
  const { language, setLanguage, t } = useLanguage()

  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.currentLanguage}{language}</p>
      <button onClick={() => setLanguage('en')}>ENglis</button>
      <button onClick={() => setLanguage('de')}>DE</button>
    </div>
  );
}

export default HomePage;