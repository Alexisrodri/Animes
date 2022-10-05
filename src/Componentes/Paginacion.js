import React from "react";
import { Link } from "wouter";

const Paginacion = ({pages,totalPages,clickDerecho,clickIzquierdo}) => {
  
  return(
        <div className="Paginacion" >
        <button className="button button--mimas">
      <span>
      <Link href="/" className='Home-Links'>
        <a className='nav-links' href='/' >Inicio</a>
      </Link>
        </span>
      </button>
      <p>{pages}</p>
        <button className="button button--mimas" onClick={clickDerecho} ><span className="pagination-span">⬅ Last</span></button>
        <button className="button button--mimas" onClick={clickIzquierdo} ><span className="pagination-span">Next ➡</span></button>
        <p>{totalPages}</p>
        </div>
    )
}

export default Paginacion;