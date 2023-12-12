import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>You can run but not hide</p>
        <p id="title">Improving GAIT Recognition with Intrinsic Occlusion Type Awareness</p>
        <div id="related-links">
          <a href="https://github.com/Ayush-00/occ-aware-gait"><button className="related-link-btn">GitHub</button></a>
          <a href="https://arxiv.org/abs/2312.02290"><button className="related-link-btn">arXiv</button></a>
        </div>
      </header>

      <div id="graphics">
        <div id="gif">
          <img src={process.env.PUBLIC_URL + "/bg.gif"} alt="animated GIF" />
          <img src={process.env.PUBLIC_URL + "/cl.gif"} alt="animated GIF" />
        </div>
        <div id="iframediv">
          <iframe title="Improving GAIT Recognition" src="https://www.youtube.com/embed/gIo8BDCrAuE"  allowFullScreen></iframe>
        </div>
      </div>

      <div id="main">
        <div className="section-heading">
          Abstract
        </div>
        <div className="section-content">
          While gait recognition has seen many advances in recent years, the occlusion problem has largely been ignored. This problem is especially important for gait recognition from uncontrolled outdoor sequences at range - since any small obstruction can affect the recognition system. Most current methods assume the availability of complete body information while extracting the gait features. When parts of the body are occluded, these methods may hallucinate and output a corrupted gait signature as they try to look for body parts which are not present in the input at all. To address this, we exploit the learned occlusion type while extracting identity features from videos. Thus, in this work, we propose an occlusion aware gait recognition method which can be used to model intrinsic occlusion awareness into potentially any state-of-the-art gait recognition method. Our experiments on the challenging GREW and BRIAR datasets show that networks enhanced with this occlusion awareness perform better at recognition tasks than their counterparts trained on similar occlusions.
        </div>


        <div className="section-heading">
          Data
        </div>
        <div className="section-content">
          <p>
            We choose outdoor gait recognition datasets in this work. We work with the GREW and the BRIAR datasets which pose significant challenges to gait recognition, in terms of illumination, turbulence and ranges.
          </p>

          <p>
            We work with silhouette data, using Detectron 2 to extract binary masks from the frames. We then perform centering and cropping as performed by OpenGait. 
          </p>
          <p>
            To work with occlusions, we introduce synthetic occlusions in our preprocessed silhouettes.
            We work with 9 occlusion ‘classes’.
          </p>
          <div className="img-container">
            <img src={process.env.PUBLIC_URL +"/synthetic_occ.png"} className="imgStyle" alt="synthetic_occ"></img>
          </div>
          <p>
            #0 – No occlusion<br/>
            #1-#4 – Rectangle patch on any one of the corners<br/>
            #5-#6 – Top or bottom half occluded<br/>
            #7-#8 – Left or right half occluded
          </p>
          <p>
            Note: The size of the occlusion patch is not fixed – it is chosen randomly for each video.
          </p>
        </div>


        <div className="section-heading">
          Method
        </div>
        <div className="section-content">
          <p>
            The main idea behind our method is that an occlusion aware network, which knows where occlusions are present in the video, will generate better gait features. For this, we propose to use an auxiliary occlusion detector network which learns occlusion relevant features and uses them to guide a gait recognition backbone to become occlusion aware.
          </p>
          <p>
            The approach is <span style={{ fontWeight: '600' }}>model agnostic</span>, and can be used with any gait recognition backbone.
          </p>
        </div>
        <p className="subsection">
          Occlusion detector
        </p>
        <div className="section-content">
          <p>
            The occlusion detector is an auxiliary network trained to generate occlusion relevant features ß. This network is trained on the proxy task of occlusion type classification (Training phase). During inference, the classification head is discarded and the intermediate features ß are used as occlusion features. The occlusion detector can operate in two modes:
          </p>
            <ul>
              <li><span style={{ fontWeight: '600' }}>Transient mode:</span> Generates different occlusion features for every frame</li>
              <li><span style={{ fontWeight: '600' }}>Cumulative mode:</span> Generates a single occlusion feature for the entire video</li>
            </ul>
        </div>


        <p className="subsection">
          Occlusion aware network
        </p>
        <div className="section-content">
          <p>
          While training the occlusion aware network, the occluded video is passed through the occlusion detector to generate occlusion features. These features are combined with the intermediate feature of the gait recognition backbone in the <span style={{ fontWeight: '600' }}>occlusion awareness module</span>. It subsequently outputs X’, an occlusion aware version of X (denoted by <span style={{ color: 'purple' }}>purple</span> in the figure). As a result, the later layers and the final gait signature also become occlusion aware.
          </p>
        </div>


        <p className="subsection">
          Occlusion awareness module
        </p>
        <div className="section-content">
          <p>
          We try different methods for combining X and ß in the occlusion awareness module. <br />
          X can be taken from one of the early convolutional layers of the backbone (Position 1) or one of the later linear layers (Position 2). Accordingly, several types of computations can be performed over X and ß. The mode of the occlusion detector depends upon the position where X is taken from, since the shapes of X and ß need to be compatible. Position 1 requires the transient mode while position 2 requires the cumulative mode.
          </p>
            <ul>
              <li><span style={{ fontWeight: '600' }}>Guided Add:</span> X and ß are simply added with each other. </li>
              <li><span style={{ fontWeight: '600' }}>Learnable 3D Conv:</span> X and ß are concatenated over the channel dimension and passed through a 3D convolution layer.</li>
              <li><span style={{ fontWeight: '600' }}>Deferred Concat:</span> X and ß are concatenated and passed through a linear layer.</li>
              <li><span style={{ fontWeight: '600' }}>Complex Deferred Concat:</span> Same as deferred concat, but with two linear layers.</li>
              <li><span style={{ fontWeight: '600' }}>3D Conv + Deferred Concat:</span> Occlusion awareness is inserted at multiple places in the backbone.</li>
            </ul>
        </div>




        <div className="section-heading">
          Baselines
        </div>
        <div className="section-content">
          <p>
            Due to the lack of gait recognition methods targeting occlusion, we compare our method with our own baselines. 
          </p>
          <p>
            Baseline 1: We train the backbone on holistic videos and evaluate it occlusions without any external guidance. This baseline answers the question, “How well would the original backbone perform on occlusions?”
          </p>
          <p>
            Baseline 2: We re-train the backbone on occlusions. This is the simplest thing we can do to adapt the network to occluded data.
          </p>
        </div>



        <div className="section-heading">
          Experiments: Generalization to unseen occlusions
        </div>
        <div className="section-content">
          <p>
            In this section, we experiment with two new types of occlusions: Dynamic occlusions and real occlusion in the BRIAR dataset. 
          </p>
          <div className="img-container">
            <img src={process.env.PUBLIC_URL +"/dynamic_occ1.gif"} className="imgStyle" alt="synthetic_occ"></img>
            <img src={process.env.PUBLIC_URL +"/briar-real-occ.gif"} className="imgStyle" alt="synthetic_occ"></img>
          </div>
          <p>
            Dynamic occlusions: In this type of occlusion, the occlusion patch keeps on moving across the frame in a video.<br />
            Real occlusions: In the BRIAR dataset, a subset of videos captured from 200m have tall grass which occludes the feet of the subject.
          </p>
          <p>
            We compare our method and Baseline 2 on these new occlusion types, and observe that our method can generalize well on these occlusion types it has not seen during training. 
          </p>
        </div>

        {/* <div className="section-content">
          <div className="img-container">
            <img className="imgStyle" src="1.png" alt="abc"></img>
            <img className="imgStyle" src="2.png" alt="abc"></img>
          </div>
        </div> */}



      </div>

      <div id="footer">
        <h1>Authors</h1>
        <div className="authors">
          <div className="author">
            <img src={process.env.PUBLIC_URL + "/Ayush.jpeg"} alt="Ayush Gupta" className="authorImg"></img>
            <p className="authorName">Ayush Gupta</p>
            <div className="authorLinks">
              <a className='authorLink' href="https://www.linkedin.com/in/ayush-gupta-491b891a2/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={"30"} color='#0077b5'/>
              </a>
              <a className='authorLink' href="https://github.com/Ayush-00" target="_blank" rel="noopener noreferrer">
                <FaGithub color='black' size={"30"}/>
              </a>
              <a className='authorLink' href="mailto:agupt120@jh.edu">
                <FaEnvelope size={"30"}/>
              </a>
            </div>
          </div>

          <div className="author">
            <img src={process.env.PUBLIC_URL + "/Rachit.png"} alt="Rachit Shah" className="authorImg"></img>
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
