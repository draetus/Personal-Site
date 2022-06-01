import React, { Component } from "react";
import SimpleTabs from "../subcomponents/SimpleTabs";
import Home from "../pages/Home";
import AcademicFormation from "../pages/AcademicFormation";
import LicensesAndCertificates from "../pages/LicensesAndCertificates";
import ProfessionalExperience from "../pages/ProfessionalExperience";
import WorkedTechnologies from "../pages/WorkedTechnologies";
import ProjectsWorked from "../pages/ProjectsWorked";
import ToStudy from "../pages/ToStudy";


export default class NavigationMenu extends Component {

    pages = [
        {
            label: "Introdução",
            page: () => (<Home />)
        },
        {
            label: "Formação Acadêmica",
            page: () => (<AcademicFormation />)
        },
        {
            label: "Licenças e Certificados",
            page: () => (<LicensesAndCertificates />)
        },
        {
            label: "Experiência Profissional",
            page: () => (<ProfessionalExperience />)
        },
        {
            label: "Tecnologias Trabalhadas",
            page: () => (<WorkedTechnologies />)
        },
        {
            label: "Projetos Trabalhos",
            page: () => (<ProjectsWorked />)
        },
        {
            label: "Em estudo",
            page: () => (<ToStudy />)
        }
    ]
    
    render() {
        return (
            <SimpleTabs items={this.pages} />
        )
    }
}