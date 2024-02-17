import Tickers from '../Tickers/Tickers';
import WatchGroup from '../WatchGroup/WatchGroup';

function App() {
  return (
    <div className="app">
      <main className="main">
        <WatchGroup />
        <Tickers />
      </main>
    </div>
  );
}

export default App;