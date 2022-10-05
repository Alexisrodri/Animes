import { useState, useEffect } from 'react'
import { MangasApi } from '../../Fetch'
import MangasList from './MangasList'

const Mangas = () => {

    const [mangas, setMangas] = useState([])
    const [total, setTotal] = useState(106)
    const [cargando, setCargando] = useState(true)
    const [page, setPage] = useState(1)

    const FetchMangas = async() =>{
        try{
        setCargando(true);
        const Data = await MangasApi(25, page)
        setMangas(Data);
        console.log(Data);
        setCargando(false);  
        setTotal(Math.round(Data.meta.last_page/25));
        }catch(error){}
      }

      useEffect(()=>{
        FetchMangas()
      },[page])
    
    return(
        <div className='Main'>
        <MangasList mangas={mangas} setPage={setPage} page={page} total={total} cargando={cargando} />
        </div>
    )
}

export default Mangas;