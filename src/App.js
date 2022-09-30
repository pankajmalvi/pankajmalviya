import './App.css';
import Header from './components/sections/header/Header';


// Data From Json
const data = require('./data.json')



function App() {
  let resumeLink = data["personal-details"]["resume-link"]
  return (
    <div className="App">
      {/* Header */}
      <Header resumeLink={resumeLink} />
      {/* Main.js */}
      {/* Footer */}
    </div>
  );
}

export default App;
