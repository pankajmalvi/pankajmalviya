import './App.css';
import Navbar from './components/sections/navbar/Navbar';

const data = require('./data.json')



function App() {
  let resumeLink = data["personal-details"]["resume-link"]
  return (
    <div className="App">
      <Navbar resumeLink={resumeLink} />
    </div>
  );
}

export default App;
