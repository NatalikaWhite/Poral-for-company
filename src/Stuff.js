import Button from './Button';
import { data } from './data';
import { useState } from 'react';
import AboutData from './AboutData';

    function Stuff(){

    const [stuff, setStuff] = useState (data);

    const chosenStuff=(department)=>{
    const newStuff = data.filter(element =>
    element.department === department);
    setStuff (newStuff);
    }
    
    return (
        <div>
            <div className="seven">
            <Button filterStuff={chosenStuff}/>
            </div>
            <AboutData aboutStuff={stuff}/>
        </div>
    )
    }

export default Stuff;