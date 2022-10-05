import { useState, useEffect } from "react";

const DetallesManga = (params) => {

const ID = params.params.id 
console.log(ID);


const[data,setData]=useState([''])
const[loading,setLoading] = useState(true)

useEffect(()=>{
    Search()
},[])


const Search = async () => {
        setLoading(true)
        let url = `https://api.jikan.moe/v4/manga/${ID}`
        const res = await fetch(url);
        const respuesta = await res.json()
        console.log(respuesta.data);
        setData(respuesta.data)
        setLoading(false)
}

return(
    <>
    <main className="Main-cont">
      {
        loading ?
        <h3>Cargando...</h3>
        :(
            <section key={data.rank} className="seccion">
            <picture key={data.mal_id} className="picture">
                <img  alt={data.title} className="picture-img" src={data.images.jpg.image_url}/>
            </picture>
            <article key={data.popularity}>

            <h2 className="titulo">{data.title}</h2>
            <p className="description">{data.synopsis}</p>
            <article className="cont-dtl">
            <div>
            {data.genres.map((genero,idx)=>{
                return(
                    <p key={idx}>{genero.name}</p>
                )
            })}
            {data.themes.map((theme)=>{
                return(
                    <>
                    <p key={theme.name}>{theme.name}</p>
                    </>
                )
            })}
            </div>
            <div key={data.scored}>
            <h3>{data.title_english}</h3>
            <h3>{data.title_japanese}</h3>
            </div>
            <h4>{data.status}</h4>
            </article>
            </article>
        </section>
        )
      }
    </main>
    </>
)

}

export default DetallesManga;