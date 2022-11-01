import React from 'react'
import { AuthContext } from './AuthContext'

// estamos definiendo un servicio
export class AuthProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    changeByLogin = ()=>{
        this.setState({user:'Alguien'})
    }


    render() {
        return (
            <AuthContext.Provider value={
                {
                user : this.state.user, 
                changeByLogin: ()=>this.changeByLogin() 
                }
            }>


    { this.props.children }
                </AuthContext.Provider >
            )
        }
    }
