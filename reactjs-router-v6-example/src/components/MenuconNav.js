import { NavLink as NavLinkReact , Link } from "react-router-dom"

// NavLink agrega automaticamene la clase active  los links si estan activos

const NavLink = ({to, children, ...props})=>{
    return(
        <NavLinkReact 
            {...props}
            className={({isActive})=>{
                return isActive? 'is-active':undefined
            }}
            to={to}                
        >
            {children}
        </NavLinkReact>

    )
}

export default function MenuMain() {
    return (
        <ul>
            <li>
                <NavLink to={'/'}>
                    Home
                </NavLink>


            </li>
            <li>
                <NavLink to={'/contact'}>Contact</NavLink>                
            </li>
            <li>
                <NavLink to={'/topics/uno'}>Topic Uno</NavLink>                
            </li>
            <li>
                <NavLink to={'/topics/dos'}>Topic dos</NavLink>                
            </li>
            


        </ul>

    )
}