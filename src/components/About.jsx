import React from "react";
import UHimage from "./images/UH.jpg";
function About(){
    return (
        
        <div className="container">
            <div className="header">
               <h2>About</h2>
               <p>Hello! I'm Victor Kwok, a recent graduate from the University of Houston with a major in Computer Science and a minor in Psychology. I am deeply passionate about programming and have honed my skills in various languages and frameworks, including HTML, CSS, JavaScript, Python, Flask, Java, React.js , C++, etc</p>
                <img src={UHimage} alt="University of Houston" width="250px" />
                <h4>Contact Me:</h4>
                <p>Email: victorchkwok@gmail.com</p>
                <p>Tele: +852 8403 1876</p>
                <p>Linkedlin: <a href="http://linkedin.com/in/victor-ch-4b25501a0" color="white" text-decoration="none">linkedin.com/in/victor-ch-4b25501a0</a></p>
            </div>
        
        </div>
        
    );
    
}

export default About;