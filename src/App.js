import './App.css';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Feeds from './components/Feeds';
import Follow from './components/Follow';
function App() {
  return (
    <>
      <div className="App">
        <Nav/>
        <div class="flex-container">
          <Dashboard/>

          <Feeds/>
          <Follow/>
        </div>


      </div>
      </>
  );
}

export default App;
