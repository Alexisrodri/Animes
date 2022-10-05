import {Link } from 'wouter';
import Busqueda from './/Busqueda';
import Populares from './AnimeTop';
import Temporada from './Seasons';

function Home() {


  return (
    <div className='main'>
    <nav className='Links'>
    <h1 className='name'>Animepedia</h1>
      <ul className="content__item">
			<button className="button button--mimas">
      <span>
      <Link href="/Animes" className='Home-Links'>
        <a className='nav-links' href='/Animes'>Animes</a>
      </Link>
        </span>
      </button>
				</ul>
      <ul className="content__item">
			<button className="button button--mimas">
      <span>
      <Link href="/Manga" className='Home-Links'>
        <a className='nav-links' href='/Manga' >Mangas</a> 
      </Link>
        </span>
      </button>
			</ul>
      <Busqueda />
      </nav>
      <Populares />
      <Temporada/>
      <footer>
        <div className="left">
            <small>2017-2022 <b>Jikan.moe</b>
        </small></div><small>

        <div className="right">
                <small>This website is open-source. <a href="https://github.com/jikan-me/website"><b>Help by making it better.</b></a></small>
        </div>
    </small></footer>
    </div>
    )
}

export default Home;
