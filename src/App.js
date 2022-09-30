import './App.css';
import Navbar from './components/sections/navbar/Navbar';

const data = require('./data.json')



function App() {
  let resumeLink = data["personal-details"]["resume-link"]
  return (
    <div className="App">
      <header>
        <Navbar resumeLink={resumeLink} />
      </header>
      <main>
        <hero>
          {/* Greeting
          Name
          Tagline
          Profile Description
          Resume Link Can be included not necessary */}
        </hero>

        <section id="section-about">
          {/* About Heading
           About article  */}
        </section>

        <section id="section-job">
          {/* Link Headings
           Work > Works */}
        </section>

        <section id="section-project">
          {/* Link Headings
           Project Description > Project */}
        </section>

        <section id="section-contact">
          {/* Link Heading Type 2
          Description
          Contact Button */}
        </section>

        <article id="left-side-links">
          {/* Github
          LinkedIn
          Other links */}
        </article>
        <article id="right-side-mail">
          {/* Mail Id */}
        </article>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
