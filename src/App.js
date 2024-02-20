import './App.scss';
import RegisterForm from './components/RegisterForm/RegisterForm';
import React from 'react';
import { IntlProvider } from 'react-intl';
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
  const [messages, setMessages] = React.useState(defaultMessages);

  const handleLanguageChange = (selectedMessages) => {
    setMessages(selectedMessages);
  };

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className='App'>
        <RegisterForm />
      </div>

      <h2>Selector de idioma</h2>
      <select onChange={(e) => handleLanguageChange(JSON.parse(e.target.value))}>
        <option value={JSON.stringify(Spanish)}>Spanish</option>
        <option value={JSON.stringify(English)}>English</option>
        <option value={JSON.stringify(French)}>French</option>
      </select>
    </IntlProvider>
  );
}

export default App;
