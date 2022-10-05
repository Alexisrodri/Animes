import { Route } from 'wouter';
import Home from './Componentes/Home';
import './App.css';
import AnimesPages from './Componentes/Animes/Anime';
import Mangas from './Componentes/Mangas/Mangas';
import DetallesAnimes from './Componentes/DetailsAnimes'
import DetallesManga from './Componentes/DetailsMangas'

function App() {


  return (
    <div className='main'>
    <Route path='/' component={Home} />
    <Route path='/Animes' component={AnimesPages} />
    <Route path='/Manga' component={Mangas} />
    <Route path='/Anime/:title/:id' component={DetallesAnimes}/>
    <Route path='/Manga/:title/:id' component={DetallesManga}/>
    </div>
    )
}

export default App;
