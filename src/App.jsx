import Header from './components/Header';
import CountryFlag from './components/FlagApi';

function App() {
  return (
    <div>
      <Header />
      <CountryFlag countryCode='RU' />
      <CountryFlag countryCode='US' />
      <CountryFlag countryCode='GB' />
    </div>
  );
}

export default App;
