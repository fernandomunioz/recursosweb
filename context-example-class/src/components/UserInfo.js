import React from 'react';
import { AuthContext } from "../contexts/AuthContext"


class UserInfo extends React.Component {
  render() {
    const context = this.context;
    const {user,changeByLogin} = context;

    return (
        <>
             <p>User : {user?user:'No logeado'} </p>
              <button onClick={changeByLogin}> Login </button>
        </>
        
    );
  }
}
UserInfo.contextType = AuthContext;

export default UserInfo;