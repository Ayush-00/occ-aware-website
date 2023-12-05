import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>You can run but not hide</p>
        <p id="title">Improving GAIT Recognition with Intrinsic Occlusion Type Awareness</p>
        <div id="related-links">
          <a href="https://github.com/Ayush-00/occ-aware-gait"><button className="related-link-btn">GitHub</button></a>
          <a href="https://arxiv.org/abs/1506.02640"><button className="related-link-btn">arXiv</button></a>
        </div>
      </header>

      <div id="graphics">
        <div id="gif">
          <img src="bg.gif" alt="animated GIF"></img>
          <img src="cl.gif" alt="animated GIF"></img>
        </div>
        <div id="iframediv">
          <iframe title="Improving GAIT Recognition" src="https://www.youtube.com/embed/gIo8BDCrAuE" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <div id="main">
        <div className="section-heading">
          Abstract
        </div>
        <div className="section-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Aliquam malesuada bibendum arcu vitae elementum. Feugiat pretium nibh ipsum consequat nisl vel. Senectus et netus et malesuada fames ac. Augue ut lectus arcu bibendum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Amet venenatis urna cursus eget. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Eget dolor morbi non arcu risus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
        </div>


        <div className="section-heading">
          Another Section
        </div>
        <div className="section-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Aliquam malesuada bibendum arcu vitae elementum. Feugiat pretium nibh ipsum consequat nisl vel. Senectus et netus et malesuada fames ac. Augue ut lectus arcu bibendum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Amet venenatis urna cursus eget. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Eget dolor morbi non arcu risus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
        </div>
        <p className="subsection">
          A subsection
        </p>
        <div className="section-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Aliquam malesuada bibendum arcu vitae elementum. Feugiat pretium nibh ipsum consequat nisl vel. Senectus et netus et malesuada fames ac. Augue ut lectus arcu bibendum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Amet venenatis urna cursus eget. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Eget dolor morbi non arcu risus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
        </div>


        <div className="section-heading">
          One More Section
        </div>
        <div className="section-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Aliquam malesuada bibendum arcu vitae elementum. Feugiat pretium nibh ipsum consequat nisl vel. Senectus et netus et malesuada fames ac. Augue ut lectus arcu bibendum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Amet venenatis urna cursus eget. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Eget dolor morbi non arcu risus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
        </div>
        <p className="subsection">
          Images this time!
        </p>
        <div className="section-content">
          <div className="img-container">
            <img className="imgStyle" src="1.png" alt="abc"></img>
            <img className="imgStyle" src="2.png" alt="abc"></img>
          </div>
        </div>


        <div className="section-heading">
          One Last Section
        </div>
        <div className="section-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Aliquam malesuada bibendum arcu vitae elementum. Feugiat pretium nibh ipsum consequat nisl vel. Senectus et netus et malesuada fames ac. Augue ut lectus arcu bibendum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Amet venenatis urna cursus eget. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Eget dolor morbi non arcu risus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
        </div>

      </div>

      <div id="footer">
        <h1>Authors</h1>
        <div className="authors">
          <div className="author">
            <img src="Ayush.jpeg" alt="Ayush Gupta" className="authorImg"></img>
            <p className="authorName">Ayush Gupta</p>
            <div className="authorLinks">
              <a className='authorLink' href="https://www.linkedin.com/in/ayush-gupta-491b891a2/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={"30"} color='#0077b5'/>
              </a>
              <a className='authorLink' href="https://github.com/Ayush-00" target="_blank" rel="noopener noreferrer">
                <FaGithub color='black' size={"30"}/>
              </a>
              <a className='authorLink' href="mailto:your.email@example.com">
                <FaEnvelope size={"30"}/>
              </a>
            </div>
          </div>

          <div className="author">
            <img src="Rachit.png" alt="Rachit Shah" className="authorImg"></img>
            <p className="authorName">Rachit Shah</p>
            <div className="authorLinks">
              <a className='authorLink' href="https://www.linkedin.com/in/ayush-gupta-491b891a2/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={"30"} color='#0077b5'/>
              </a>
              <a className='authorLink' href="https://github.com/Ayush-00" target="_blank" rel="noopener noreferrer">
                <FaGithub color='black' size={"30"}/>
              </a>
              <a className='authorLink' href="mailto:your.email@example.com">
                <FaEnvelope size={"30"}/>
              </a>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default App;
