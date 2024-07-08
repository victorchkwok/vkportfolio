import React from 'react';
import Jtech from "./images/Jtech.jpg";
function Experiences() {
  return <div><div className="container">
    <div className="header">
    <h2>Experiences</h2>
  <div className="container project">
  <h3 className ='period'>05/22 to 08/22</h3>
    <h2 className='title'>SWE intern</h2>
    <h4 className="location">J-tech Digital Location: US, TX</h4>
    
    <p className ='inside'>
      <ul>
        <li>Developed a receipt generator software that takes in json & creates a pdf file.</li>
        <li>Reviewed Bill of Material & assembled different platforms of Personal Systems.</li>
        <li>Updated and maintained accurate data in internal system.</li>
      </ul>
      <div className='imagesection'>
      <img src={Jtech} alt="Jtech" width="250px" />
      </div>
      
    </p>
  </div>
</div></div></div>;
}

export default Experiences;
