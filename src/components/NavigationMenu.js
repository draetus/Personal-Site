import React, { Component } from "react";
import SimpleTabs from "../subcomponents/SimpleTabs";

export default class NavigationMenu extends Component {

    pages = [
        {
            label: "Introdução",
            page: () => (<p>Introducao</p>)
        },
        {
            label: "Formação Acadêmica",
            page: () => (<p>Formação Academica</p>)
        },
        {
            label: "Licenças e Certificados",
            page: () => (<p>Licenças e Certificados</p>)
        },
        {
            label: "Experiência Profissional",
            page: () => (<p>Experiência Profissional</p>)
        },
        {
            label: "Tecnologias Trabalhadas",
            page: () => (<p>Tecnologias Trabalhadas</p>)
        },
        {
            label: "Projetos Trabalhos",
            page: () => (<p>Projetos Trabalhados</p>)
        },
        {
            label: "Em estudo",
            page: () => (<p>Em estudo</p>)
        }
    ]
    
    render() {
        return (
            <SimpleTabs items={this.pages} />
        )
    }
}