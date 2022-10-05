import React,{useState, useEffect} from "react"
import { Link } from "wouter"


const Populares = () => {
    
const[loading,setLoading] = useState(true)
const[data,setData]=useState('')
const[media,setMedia]=useState('anime')



 const Top = async () => {
  try{
      let url = `https://api.jikan.moe/v4/top/${media}?&limit=10`
      const res = await fetch(url);
      const data = await res.json()
      return data.data
  }catch(error){
      console.log(error);
  }
}

const Popular = async () => {
  setLoading(true)
  const tops = await Top()
  setData(tops)
  setLoading(false)
}  

const Anime = (e) => {
  setMedia('anime') 
  e.target.classList.toggle('active')
}
 const Manga = (e) => {
  setMedia('manga')
  e.target.classList.toggle('active')
} 


useEffect(()=>{
  Popular()
},[media])



    return(
    <main className="main">
    <div className="main-nav">
    <h3 className="main-title">Top:</h3>
    <button className="main-btn" onClick={Anime} >Animes</button>
    <button className="main-btn" onClick={Manga} >Mangas</button>
    </div>
      <section className="cont-titulos">
        {loading?
          <small>Cargando</small>
          :(
            data.map((datos)=>{
              return(
                <div key={datos.mal_id} id="cont-animes">
                <picture key={datos} className='picture'>
                  <img alt={datos.mal_id} className='picture'  src={datos.images.jpg.image_url} />
                </picture>
                <div className="texts">
                  <Link className="links-detalles" href={`/${media}/${datos.title}/${datos.mal_id}`}>{datos.title}</Link>
                  <small>Calificacion: {datos.score}</small>
                </div>
                </div>
              )
            })
          )
        }

        </section>
      </main>
    )
}

export default Populares;

