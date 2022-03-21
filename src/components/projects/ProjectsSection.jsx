import React from 'react'
import styled from 'styled-components';
import Project from './Project';
import Title from '../Title'

const ProjectsArea = styled.div`
   padding:6rem 0;
   .projects-con {
    margin-top: 6rem;
}
@media only screen and (max-width:768px){
    .projects-con {
        padding: 0;
    }
}


`

function ProjectsSection() {
  return (
    <ProjectsArea>
        <Title titleBack='projects' titleTop='my projects'/>
        <div className="container projects-con">
            <Project/>
            <Project/>
            <Project/>
        </div>

    </ProjectsArea>
  )
}

export default ProjectsSection