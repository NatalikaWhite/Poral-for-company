import react from 'react';
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
            <Button filterStuff={chosenStuff}/>
            <AboutData aboutStuff={stuff}/>
        </div>
    )
    }

export default Stuff;