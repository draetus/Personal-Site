import { Container } from "material-ui-core";
import React, { Component } from "react";

export default class Home extends Component {

    render() {
        return (
            <div class="row" style={{
                color: "gray",
                flex: "1"}}>
                <div class="leftColumn" style={styles.bigLeftContainer}><p>div da esquerda</p></div>
                <div class="rightColumn" style={styles.smallRightContainer}><p>div da direita</p></div>
                <div class="centralColumn" style={styles.centralContainer}><p>div de baixo</p></div>
            </div>
        )
    }

}

const styles = {
    bigLeftContainer: {
        backgroundColor: "black", 
        width: "65%",
        float: "left"
    },
    smallRightContainer: {
        backgroundColor: "blue", 
        width: "35%",
        float: "left"
    },
    centralContainer: {
        backgroundColor: "gray", 
        width: "100%",
        float: "left"
    }
}