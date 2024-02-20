import './App.scss';
import RegisterForm from './components/RegisterForm/RegisterForm';
import React, { useState, useRef } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import Spanish from './lang/es.json';
import French from './lang/fr.json';
import English from './lang/en.json';

const locale = navigator.language;
let defaultMessages = Spanish;
switch (locale) {
  case 'fr-FR':
    defaultMessages = French;
    break;
  case 'en-EN':
    defaultMessages = English;
    break;
  case 'es-ES':
    defaultMessages = Spanish;
    break;
  default:
    defaultMessages = English;
}

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultMessages);
  const selectRef = useRef(null);

  const handleChangeLanguage = () => {
    const selectedValue = selectRef.current.value;
    setSelectedLanguage(JSON.parse(selectedValue));
  };

  return (
    <IntlProvider locale={locale} messages={selectedLanguage}>
      <div className='App'>
        <RegisterForm />
        <h2 className='App__language'>
          <FormattedMessage id='app:language_selector' />
        </h2>
        <select className='App__language-select' ref={selectRef}>
          <option value={JSON.stringify(Spanish)}>
            <FormattedMessage id='app:spanish' />
          </option>
          <option value={JSON.stringify(English)}>
            <FormattedMessage id='app:english' />
          </option>
          <option value={JSON.stringify(French)}>
            <FormattedMessage id='app:french' />
          </option>
        </select>
        <button className='App__change-button' onClick={handleChangeLanguage}>
          <FormattedMessage id='app:change' />
        </button>
      </div>
    </IntlProvider>
  );
}

export default App;
