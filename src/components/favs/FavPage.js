import React from 'react'
import styles from './favs.module.css'
import Card from '../card/Card'
import {connect} from 'react-redux'
function FavPage({ characters = [0] }) {
    function renderCharacter(char, i) {
        return (
            <Card 
            hide
            {...char}
            key={i} />
        )
    }
    return (
        <div className={styles.container}>
            <h2>favorites</h2>
            {characters.map(renderCharacter)}
            {!characters.length && <h3>No favorites cards !</h3>}
        </div>
    )
}
function mapState({characters}){
    return{
        characters: characters.favorites
    }
}
export default connect(mapState)(FavPage)