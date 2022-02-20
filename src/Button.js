function Button ({filterStuff}){
    return(
        <div className="cont">
            <button className="green" onClick={() =>filterStuff("security")} >Безопасность</button>
            <button className="green" onClick={()=>filterStuff("ecspluatetion")}>Эксплуатация</button>
            <button className="green" onClick={()=>filterStuff("HR")}>HR</button>
            <button className="green" onClick={()=>filterStuff("money")}>Финансы</button>
        </div>
    )
}




export default Button;