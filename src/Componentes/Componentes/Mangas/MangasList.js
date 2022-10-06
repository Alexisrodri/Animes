import Paginacion from "../Paginacion"
import {Link} from 'wouter';



const MangasList = ({mangas,page,cargando,setPage,total}) =>{
    const nextPages = () =>{
        const nextpage = Math.min(page + 1, total)
        setPage(nextpage)
    }

    const lastPages = () =>{
        const lastpage = Math.max(page - 1,0)
        setPage(lastpage)
    }
    
    
    return(
        <>
            <Paginacion pages={page} totalPages={total} clickDerecho={lastPages} clickIzquierdo={nextPages} />
        <section className="Anime-List">
        {cargando ?
        <div className="Cont-Loading">
            <h3 className="Cargando">cargando Mangas...</h3>
        </div>
        :
        mangas.data.map((manga)=>{
            return(
                <picture className="cont-images" key={manga.mal_id}>
                <img src={manga.images.jpg.image_url}  className="anime-images" alt={manga.title} />
                <Link href={`/Manga/${manga.title}/${manga.mal_id}`} className='anime-links' >{manga.title}</Link>
                </picture>
            )
        })}
        </section>
        </>
    )
}


export default MangasList;