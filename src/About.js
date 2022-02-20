import { useState } from 'react';


function About(){

    const [showText, setShowText] = useState(false);
    let textik ="Мы всегда стремимся применять в своих проектах новейшие достижения мировой архитектуры и дизайна. Проектируя для конкретных людей, мы материализуем их собственное видение идеального пространства, их мечты и желания. Проекты нашей студии — это итог творческого союза архитекторов с заказчиком, итог совместного размышления. И поэтому среди наших работ Вы не найдете двух одинаковых зданий или интерьеров. Создавая различные проекты для людей, мы меняем их жизнь к лучшему.";
    return(
        <div className="bigText">
            <div className="cont">
            <h2>АРХИТЕКТУРНАЯ СТУДИЯ FLY ARCHITECTS</h2>
            </div>
        <div className="text">
            <p> 
                {showText ? textik: textik.substring(0,200) + "..."}
            <button className="six" onClick={() => setShowText (!showText)}> {textik? "show more" : "show less"} </button>
            </p>
        </div>

        </div>
    )
}

export default About;