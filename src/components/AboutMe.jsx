import "./AboutMe.css";
import {useState} from "react";

const AboutMe = () => {
    const [name, setName] = useState("");
    
    const showName = () => {
        setName("Jorge");
    };
    
    return(
        <div className="AboutMe">
            <h3>About Me</h3>
            <hr />
            <p>Hello, my name is:</p>
            <h4>{name}</h4>
            <button onClick={showName}>Show</button>
        </div>
    );
}

export default AboutMe;