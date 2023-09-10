import { Translation } from 'react-i18next';

const ListViewSingle=({book,t})=>{
    return(
        <div className='single-list-item-home'>
     
                <li>{t('title', { keyPrefix: book })}</li>
                <p>{t('excerpts', { keyPrefix: book })}</p>
    
               </div>



    )
}

export default ListViewSingle