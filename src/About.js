import { useState } from 'react';
import { dataTwo } from './dataTwo';

function About (){

    const [dataTwo, setdataTwo] = useState(dataTwo);
    const [showText, setShowText] = useState(false);

    return (
        <div>

            {dataTwo.map((element=>{
                const{description}=element;
                
                return(
                    <div className="three">
                    <p> {showText ? description: description.substring (0,100)+ "..."}
                    <button onClick={() => setShowText(!showText)}>{showText ? "Show less" : "Show more"}</button>
                    </p>
                        </div>
                )
            })) }

        </div>
    )
}


export default About;