import { Link } from "react-router-dom"


export default function MenuMain() {
    return (
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/contact'}>Contact</Link>                
            </li>
            <li>
                <Link to={'/topics/uno'}>Topic Uno</Link>                
            </li>
            <li>
                <Link to={'/topics/dos'}>Topic dos</Link>                
            </li>
            


        </ul>

    )
}