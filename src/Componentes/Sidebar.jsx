import { useHistory } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from 'react-icons/ai'
import '../Styles/Componentes/sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    const { goBack } = useHistory()

    return (
        <aside className="app-sidebar">
            <footer>
                <button type='button' onClick={goBack}>
                    <AiFillHome size={27} color='#fff' />
                </button>
                <Link to='/autora'>
                    <AiOutlineUser size={27} color='#fff'/>
                </Link>
            </footer>
        </aside>
    )
}
export default Sidebar