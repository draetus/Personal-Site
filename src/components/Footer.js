import { Container } from "material-ui-core";
import React, { Component } from "react";

export default class Footer extends Component {
    
    render() {
        return (
            <div style={styles.footer}>
                <p>FOOTER</p>
            </div>
        )
    }
}

const styles = {
    footer: {
        backgroundColor: "yellow"
    }
}