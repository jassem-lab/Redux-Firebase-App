import React from 'react'
import styles from './login.module.css'
import { connect } from 'react-redux'
import { doGoogleLoginAction, logOutAction } from '../../redux/userDuck'

export function LoginPage({loggedIn, fetching, doGoogleLoginAction, logOutAction}) {
    
    function doLogin(){
        doGoogleLoginAction()
    }
    function logOut(){
        logOutAction()
    }
    if (fetching) return <h2>Loading</h2>
    return (
        <div className={styles.container}>
            {loggedIn ? <h1>
                connect to google
            </h1> :
            <h1>
                aucune session connectée
            </h1>}
            
            {loggedIn ? 
            <button onClick={logOut}>
                disconnect
            </button> :
            <button onClick={doLogin}>
            connect
        </button>}
        </div>
    )
}
function mapState({ user : {fetching, loggedIn} }){
    return{
        fetching,
        loggedIn
    }
    
}
export default connect(mapState, {doGoogleLoginAction, logOutAction})(LoginPage)