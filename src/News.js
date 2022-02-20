import { dataTwo } from './dataTwo';
import { useState } from 'react';

function News(){

const [news, setNews] = useState(0);
const {imageTwo} = dataTwo[news];

const beforNews = () =>{
    setNews((news=>{
        news --;
        if(news<0){
            return dataTwo.length-1;
        }
        return news;
    }))
}

const nextNews = () =>{
    setNews((news=>{
    news++;
    if(news>dataTwo.length-1){
        news=0;
    }
    return news;
}))
}

    return(
        <div>
    <div className="">
    <img src={imageTwo} width="700px"/>
    </div>
    <div>
    <button onClick={beforNews}>Назад</button>
    <button onClick={nextNews}>Вперед</button>
    </div>
    </div>
    )
}

export default News;