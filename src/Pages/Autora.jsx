import { Link } from 'react-router-dom'
import { AiFillPlayCircle } from 'react-icons/ai';
import { AiFillHome } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import '../Styles/Pages/autora.css'

const Autora = () => {
    return (
        <div className='caixa'>

            <h1>Bem Vindos!</h1>
            <h3>Um pouco sobre mim</h3>

            <div className='div_autora'>
                <p className=' p-autora'>"Olá! Sou Michele, resido na cidade do Jaboatão dos Guararapes, Pernambuco. Atualmento faço parte da turma On8 da Reprograma do curso de front-end. Ás vezes para passar o tempo, relaxar a cabeça dos estudos,  assisto filmes e series. Então, deixo aqui alguns dos filmes que já assistir e gostei. Espero que goste de algum e se divirta com a indicação que dei".
                    </p>
                <img className='img' src="https://avatars3.githubusercontent.com/u/60739164?s=460&u=70f82636b89699697d1a017e9951a74be47d017d&v=4" alt="foto" />
            </div>
            <div className='div-link'>
                <Link to='/filmes' className='toLink'>
                    <AiFillPlayCircle size={26} color='#fff' />
                </Link>
                <Link to='/' className='toLink'>
                    <AiFillHome size={26} color='#fff' />
                </Link>
            </div>
            <footer className='footer_autora'>
                <ul>
                    <ol><a target='blank' href="https://www.instagram.com/michellecoelho7/" ><AiOutlineInstagram size='35' color='#fff' /></a></ol>
                    <ol><a target='blank' href="https://github.com/micheleset7"><AiOutlineGithub size='35' color='#fff' /></a></ol>
                    <ol><a target='blank' href="https://www.linkedin.com/in/michele-coelho-5017aa79"><AiFillLinkedin size='35' color='#fff' /></a></ol>
                </ul>
                <p className='p-footer'> <AiOutlineCopyrightCircle /> Copyright 2020 By Michele Coelho | Reprograma </p>
            </footer>
        </div>
    )
}
export default Autora