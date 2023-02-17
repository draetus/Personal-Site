import React, { Component } from "react";
import SimpleTabs from "../subcomponents/SimpleTabs";
import Home from "../pages/Home";
import AcademicFormation from "../pages/AcademicFormation";
import LicensesAndCertificates from "../pages/LicensesAndCertificates";
import ProfessionalExperience from "../pages/ProfessionalExperience";
import WorkedTechnologies from "../pages/WorkedTechnologies";
import ProjectsWorked from "../pages/ProjectsWorked";
import ToStudy from "../pages/ToStudy";
import { AccessAlarm } from '@mui/icons-material';


export default class NavigationMenu extends Component {

    pages = [
        {
            label: "Introdução",
            page: () => (<Home />),
            icon: <AccessAlarm />
        },
        {
            label: "Formação Acadêmica",
            page: () => (<AcademicFormation />),
            icon: <AccessAlarm />
        },
        {
            label: "Licenças e Certificados",
            page: () => (<LicensesAndCertificates />),
            icon: <AccessAlarm />
        },
        {
            label: "Experiência Profissional",
            page: () => (<ProfessionalExperience />),
            icon: <AccessAlarm />
        },
        {
            label: "Tecnologias Trabalhadas",
            page: () => (<WorkedTechnologies />),
            icon: <AccessAlarm />
        },
        {
            label: "Projetos Trabalhos",
            page: () => (<ProjectsWorked />),
            icon: <AccessAlarm />
        },
        {
            label: "Em estudo",
            page: () => (<ToStudy />),
            icon: <AccessAlarm />
        }
    ]
    
    render() {
        return (
            <SimpleTabs items={this.pages} />
        )
    }
}