const ChangeLngRadio=({setCurrentLang,currentLang})=>{
    return(
        <div className="radio-container">
            <label for='en'/>
            en<input 
                value='en' 
                name ='lang' 
                type='radio' 
                checked={currentLang=='en'?true:false}
                onChange={()=>setCurrentLang('en')}/>
            <label>
            hi<input 
                value='hi' 
                name ='lang' 
                type='radio'
                checked={currentLang=='hi'?true:false}
                onChange={()=>setCurrentLang('hi')}
                />
            </label>
            <label>
            de<input 
                value='de' 
                name ='lang' 
                type='radio'
                checked={currentLang=='de'?true:false}
                onChange={()=>setCurrentLang('de')}
                />
            </label>
        </div>
    )
}
export default ChangeLngRadio