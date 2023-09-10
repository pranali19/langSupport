import {Link, NavLink} from 'react-router-dom'
import ChangeLngRadio from "./changeLangRadio";


// uses t function from i18n to get value from translation resourses
const Header=({t,setCurrentLang,currentLang})=>{
    return (
        <div className='header'>
            <h1>{t('main_title')}</h1>
            <div className="tabs-container">
            {/* menu links */}
                <button><NavLink to='/'>{t('home_button')}</NavLink></button>
                <button><NavLink to='/about'>{t('about_button')}</NavLink></button>
            </div>
            {/* contains radio btns for language change */}
            <ChangeLngRadio currentLang={currentLang} setCurrentLang={setCurrentLang}/>
            

        </div>
    )
}

export default Header