const RadioInput=({langCode,setCurrentLang,currentLang})=>{
    return(
        <label>
        {langCode}
        <input 
            value={langCode}
            name ='lang' 
            type='radio'
            checked={currentLang==langCode?true:false}
            onChange={()=>setCurrentLang(langCode)}
            />
        </label>
    )

}

const ChangeLngRadio=({setCurrentLang,currentLang})=>{
    return(
        <div className="radio-container">
            <RadioInput langCode={'en'} setCurrentLang={setCurrentLang} currentLang={currentLang} />
            <RadioInput langCode={'hi'} setCurrentLang={setCurrentLang} currentLang={currentLang} />
            <RadioInput langCode={'de'} setCurrentLang={setCurrentLang} currentLang={currentLang} />

        </div>
    )
}
export default ChangeLngRadio