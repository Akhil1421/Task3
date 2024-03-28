import './App.css';
import Dashboard from './components/Dashboard/dashboard';
import DayHighlights from './components/DayHighlights/dayHighlights';
import Sidebar from './components/Sidebar/sidebar';

function App() {
  //Divided the web page into 3 components : Sidebar, Main Dashboard and Days Highlights
  return (
    <div className="App">
      <Sidebar/>
      <Dashboard/>
      <DayHighlights/>
    </div>
  );
}

export default App;
