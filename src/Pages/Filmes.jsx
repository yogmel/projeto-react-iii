import { useState, useEffect } from 'react'
import Dados from '../Services/Dados'
import Sidebar from '../Componentes/Sidebar'
import '../Styles/Pages/filmes.css'

const Filmes = () => {
    const [repo, setRepo] = useState([])
    const [busca, setBusca] = useState('')
    useEffect(() => {
        setRepo(
            Dados.filter(item => {
                return item.nome.includes(busca)
            })
        )
    }, [busca])
    return (
        <>
            <Sidebar />
            <div id='container'>
                <h1>Buscar Filmes</h1>
                <p>Procure o Filme Desejado Pelo Nome</p>
                <input type="text" placeholder='Digite o nome do filme' onChange={item => setBusca(item.target.value)} />
                <div>
                    {repo.map(item => {
                        return <li className='card' key={item.id}>
                            <h3>Título: {item.nome}</h3>
                            <p>Gênero: {item.genero}</p>
                            <img src={item.capa} alt="filme" />
                        </li>
                    })}
                </div>
            </div>
        </>
    )
}
export default Filmes