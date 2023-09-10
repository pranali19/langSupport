import {Link, NavLink} from 'react-router-dom'
import ChangeLngRadio from "./changeLangRadio";



const Header=({t,setCurrentLang,currentLang})=>{
    return (
        <div className='header'>
            <h1>{t('main_title')}</h1>
            <div className="tabs-container">
                <button><NavLink to='/'>{t('home_button')}</NavLink></button>
                <button><NavLink to='/about'>{t('about_button')}</NavLink></button>
            </div>
            <ChangeLngRadio currentLang={currentLang} setCurrentLang={setCurrentLang}/>
            

        </div>
    )
}

export default Header