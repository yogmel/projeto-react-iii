import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../Styles/Pages/home.css'

const Home = () => {
    return (
        <div id='page-landing'>
            <div className="content-wrapper">
                <main>
                    <h1>Sessão Filmes</h1>
                    <p> Confira alguns filmes selecionados para esta página.</p>
                </main>
                <Link to='/filmes' className='enter-app'>
                    <FiArrowRight size={26} color='rgba(0,0,0,0.6)' />
                </Link>
            </div>
        </div>
    )
}
export default Home