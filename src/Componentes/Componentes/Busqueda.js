import { useState } from "react";
import  {AnimeFind}  from "../Fetch";
import {Link} from 'wouter';


const Busqueda = () => {
    
const [anime, setAnime] = useState("");
const [busqueda,setBusqueda] = useState('')


const ApiFind = async (anime) => {  
    const res = await AnimeFind(anime);
    if( anime.length <= 3 ){
    alert('al menos 4 letras')
    }else{
        setAnime(res.data)
    }
    }

    const ChangesInput = (e) => {
        if(busqueda.length <= 3){
            setBusqueda('')
        } else{
        }
        e.preventDefault()
        ApiFind(busqueda)
   }    
   
   const InputValor = (e) =>{
       setBusqueda(e.target.value)
   }










    return(
        <section className="Buscador">
        <div className="cont-buscador">
        <form className="formulario" onSubmit={ChangesInput}>
        <input className="input-buscador"  placeholder="Buscador..." onChange={InputValor}></input>
        </form>
        <div className={`buscador-detalles ${busqueda.length <= 5}`} >
        { (!Array.isArray(anime))   ?
        <div className="box">
        <h1 className="Texto-busqueda">Buscando...</h1>
        </div>
        :
        (
        anime.map((animes,idx)=>{
            return(
                <div key={idx} className='cont-busqueda'>
                    {/* <img src={animes.images.jpg.image_url} className="anime-busqueda" alt={animes.title} /> */}
                    <Link className="anime-name" href={`/Anime/${animes.title}/${animes.mal_id}`} >{animes.title}</Link>
                </div>
            )
        })
        )
    }
        </div>
    </div>
        </section>
    )
}

export default Busqueda;