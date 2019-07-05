import React, { Component } from 'react';
import logo from './logo.svg';
import { addLocaleData, IntlProvider } from 'react-intl'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import es from 'react-intl/locale-data/es'
import TranslatedText from './components/TranslatedText'
import messages from './messages'
import './App.css';

addLocaleData(en)
addLocaleData(fr)
addLocaleData(es)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'fr'
    }
  }

  setLocale = (locale) => {
    console.log(locale);
    this.setState({ locale });
  }

  render() {
    const {
      locale
    } = this.state

    return (
      <IntlProvider locale={locale} messages={messages[locale]} >
        <div>
          <select value={locale} onChange={(e) => this.setLocale(e.target.value)}>
            <option value="es">Espanol</option>
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
          <TranslatedText />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
