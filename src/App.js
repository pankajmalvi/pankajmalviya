import './App.scss';
import Footer from './components/sections/footer/Footer';
import Header from './components/sections/header/Header';
import Main from './components/sections/main/Main';


// Data From Json
const data = require('./data.json')



function App() {
  let resumeLink = data["personal-details"]["resume-link"]
  let links = data["important-links"]
  let email = data["personal-details"]["email"]
  return (
    <div className="App">
      <Header resumeLink={resumeLink} />
      <Main data={data} />
      <Footer links={links} email={email} />
    </div>
  );
}

export default App;
