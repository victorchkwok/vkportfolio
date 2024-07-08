import React from 'react';
import SG1 from './images/SGimg1.png';
import SG2 from './images/SGimg2.png';
import BT1 from './images/BTimg1.png';
import BT2 from './images/BTimg2.png';
import SS1 from './images/SSimg1.png';
import SS2 from './images/SSimg2.png';
import WA1 from './images/WAimg1.png';

function Projects() {
  return <div><div className="container"><div className="header">
  <h2>Projects</h2>
  <div className="container">
    <p>
      <h2>Brain Tumor Detection Deep learning </h2>
      <ul>
        <li>Classifying brain images into "Tumor" and "None" categories using TensorFlow and Keras.</li>
        <li>Data Preprocessing by converting images to grayscale and standardizing dimensions to 160x160 pixels</li>
        <li>Trained a deep neural network with ReLU activation functions and SGD optimization for 10 epochs</li>
        <li>Using Matplotlib to visualize the data.</li>
      </ul></p>
      <div className="imagesection">
      <img src={BT1} alt="" width= "300px"/>
      <img src={BT2} alt="" width= "300px"/>
      <a href="https://youtu.be/m_rS70FIJw8"><button className='button-29'>Demo</button></a>
    </div>
  </div>
  <div className="container">
    <p>
    <h2>Sneaker Product Description Generator</h2>
      <ul>
        <li>Developed an image-based sneaker product description generator using TensorFlow and Jupyter Notebook.</li>
        <li>Trained two distinct image classifier models: one for color classification and another for style identification.</li>
        <li>Fine-tuned the GPT-2 language model to generate detailed product descriptions based on input images.</li>
        <li>Leveraged TensorFlow for model development, Jupyter Notebook for experimentation, and GPT-2 for natural language generation.</li>
      </ul>
    </p>
    <div className="imagesection">
      <img src={SG1} alt="" width= "300px"/>
      <img src={SG2} alt="" width= "300px"/>
      <a href="https://youtu.be/A_YsuZybLLs"><button className='button-29'>Demo</button></a>
    </div>
  </div>
  <div className="container">
    <p>
    <h2>Sneaker Ecommerce Store Frontend</h2>
      <ul>
        <li>Developed a responsive sneaker e-commerce store using HTML, CSS, and JavaScript, enabling users to explore and purchase sneakers with an
interactive product slider.
</li>
        <li>Implemented user-friendly navigation, product details, and a secure payment modal, enhancing the overall shopping experience.</li>
        <li>Focused on attention to detail, employing visually appealing designs and responsive layouts</li>
      </ul>
    </p>
    <div className="imagesection">
      <img src={SS1} alt="" width= "300px"/>
      <img src={SS2} alt="" width= "300px"/>
      <a href="https://victorchkwok.github.io/sneakerfrontend.github.io/"><button className='button-29'>Link</button></a>
    </div>
  </div>
  <div className="container">
    <p>
    <h2>Weather App</h2>
      <ul>
        <li>Implemented a search functionality that allows users to input a city name and fetch current weather data.</li>
        <li>Displayed weather information including temperature, weather description, wind speed, and humidity.</li>
        <li>Utilized React hooks such as useState and useEffect to manage state and side effects.</li>
        <li>Designed a user-friendly interface with responsive layouts to ensure optimal viewing on various devices.</li>
      </ul>
    </p>
    <div className="imagesection">
      <img src={WA1} alt="" width= "300px"/>
      <a href="https://victorchkwok.github.io/weatherapp/"><button className='button-29'>Link</button></a>
    </div>
  </div>
</div></div></div>;
}

export default Projects;