import './App.css';
import Header from './components/Header/Header';
import AddFlight from './components/AddFlight/AddFlight';
import AllFlight from './components/AllFlights/AllFlight';

function App() {
  return (
    <>
      <Header/>
      <section>
        <AddFlight/>
        <AllFlight/>
      </section>
    </>
  );
}

export default App;
