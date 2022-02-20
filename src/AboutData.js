function AboutData({aboutStuff}){
    return(
        <div className="people">
            {aboutStuff.map((element=>{
                const{image, call, department}=element;
                return(
                    <div className="one">
                        <img src={image} width="250px" height="370px" alt="picture"/>
                        <div className="two">
                        <p>{call}</p>
                        <p>{department}</p>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
    }
export default AboutData;
