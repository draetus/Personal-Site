import { Container } from "material-ui-core";
import React, { Component } from "react";

export default class Home extends Component {

    render() {
        return (
            <div class="row" style={{
                color: "gray",
                flex: "1"}}>
                <div class="leftBar" style={styles.smallLeftBorderContainer}><p>borda da tela</p></div>
                <div class="leftColumn" style={styles.bigLeftContainer}><p>div da esquerda</p></div>
                <div class="rightColumn" style={styles.smallRightContainer}><p>div da direita</p></div>
                <div class="rightBar" style={styles.smallRightBorderContainer}><p>borda da tela</p></div>
                <div class="leftBar" style={styles.smallLeftBorderContainer}><p>borda da tela</p></div>
                <div class="centralColumn" style={styles.centralContainer}><p>div de baixo</p></div>
                <div class="rightBar" style={styles.smallRightBorderContainer}><p>borda da tela</p></div>
            </div>
        )
    }

}

const styles = {
    smallLeftBorderContainer: {
        backgroundColor: "purple", 
        width: "10%",
        float: "left"
    },
    smallRightBorderContainer: {
        backgroundColor: "purple", 
        width: "10%",
        float: "right"
    },
    bigLeftContainer: {
        backgroundColor: "black", 
        width: "55%",
        float: "left"
    },
    smallRightContainer: {
        backgroundColor: "blue", 
        width: "25%",
        float: "left"
    },
    centralContainer: {
        backgroundColor: "gray", 
        width: "80%",
        float: "left"
    }
}