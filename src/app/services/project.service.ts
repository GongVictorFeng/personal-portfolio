import { Injectable, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    projects: Project[] = [
      {
       id: 0, 
       name: "Course Register System", 
       picture: "../../assets/angular_material.png", 
       projectLink: "https://github.com/GongVictorFeng/course_register?tab=readme-ov-file",
       url: "https://course-register-e5ab4.web.app",   
       summary: "A web application for course registration that allows instructors to manage courses.", 
       description: "A web application for course registration, I created it to explore the Angular Material components, the repo is updated to Angular 19, all components are standalone components. I have already deployed this app on Firebase, will add more features in the future, because it can be easily extented to a full stack application.", 
       tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]
      },
      { 
        id: 1, 
        name: "Personal Portfolio", 
        picture: "../../assets/home_page.png", 
        projectLink: "https://github.com/GongVictorFeng/personal-portfolio",
        url: "https://personal-portfolio-a67e2.web.app",   
        summary: "A personal wesbite to showcase the projects, resume and contact.", 
        description: "A personal website to showcase the projects, there are four pages, Home, Projects, Resume and Contact. The Home page is the landing page, it has a brief introduction of myself, the Projects page shows all the projects I have done, the Resume page shows my resume, and the Contact page has a contact form. I used Angular Material to create the UI, and deployed it on Firebase.", 
        tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]
       },
       {
        id: 2, 
        name: "Course Register Server", 
        picture: "../../assets/course_register_server.png", 
        projectLink: "https://github.com/GongVictorFeng/course_register_server",
        url: "",   
        summary: "A web service involving several apis for the project course register system to retrieve data.", 
        description: "A very simple web service involving serveral apis for the project course register system to retrieve data. I used Node.js and Express to create the server. The server is deployed on Render. The server is used to retrieve data for the course register system, such as courses and lessons.", 
        tags: [Tag.JAVASCRIPT, Tag.NODEJS]
       },
       {
        id: 3, 
        name: "Patient Management System", 
        picture: "../../assets/patient_management_system.png", 
        projectLink: "https://github.com/GongVictorFeng/PatientManagementSystem",
        url: "https://drive.google.com/file/d/1tfZ0PT_y667y2jh1rs-iNvEB0Ng3u3yY/view",   
        summary: "A full stack application developed for the course - software design and architecture.", 
        description: "A full stack application developed with 4 students in the course - software design and architecture. I designed the database, created the backend with Spring Boot, the backend follows the clean architecture: Domain layer contains the core business entities, Application layer contains the business logic and use cases, Adapter layer has converters to transfer data between domain and persistence layers, and infrastructure layer is to communicate with external resources. You can check the demo vdieo on the demo link",
        tags: [Tag.REACT, Tag.NODEJS, Tag.KOTLIN, Tag.SPRINGBOOT]
       },
       {
        id: 4, 
        name: "Angular Signal", 
        picture: "../../assets/angular_signal.png", 
        projectLink: "https://github.com/GongVictorFeng/Angular_Signal",
        url: "",   
        summary: "A project that I created to study and explore the angular signals.", 
        description: "A project that I created to explore the angular signals. Since the RxJs is gradually becoming optional in Angular, so that leverage signals and minimize the RxJs would be a super interesting topic. This project is a small course register application that I try to build in signal style.",
        tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]
       },
       {
        id: 4, 
        name: "Design Patterns", 
        picture: "../../assets/design_patterns.png", 
        projectLink: "https://github.com/GongVictorFeng/DesignPattern",
        url: "",   
        summary: "A project that I created to explore the design patterns and its implementation in C#.", 
        description: "A project that I created to explore the design patterns and its implementation in C#. Currently I implemented 3 design patterns in C#, and it will keep updating . The project is a good resource for learning design patterns in C#.",
        tags: [Tag.CSHARP, Tag.ASPNET]
       },
       {
        id: 5, 
        name: "Data Structure and Algorithm", 
        picture: "../../assets/data_structure_algorithm.png", 
        projectLink: "https://github.com/GongVictorFeng/dataStructureAndAlgo",
        url: "",   
        summary: "A project that I created to study data structure and algorithm and its implementation in Java.", 
        description: "A project that I created to study data structure and algorithm and its implementation in Java. I will solve a chunk of leetcode questions in Java. The project is a good resource for learning data structure and algorithm in Java.",
        tags: [Tag.JAVA]
       }
    ];
    
  constructor() {}

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) {
    const project = this.projects.find((project) => project.id === id);
    if (project === undefined) {
      throw new TypeError("There is no project that matches the id: " + id)
    }
    return project;
  }

  getProjectsByFilter(filterTags: Tag[]): Project[] {
    const filterProjects: Project[] = [];

    this.projects.forEach(
      (project) => {
        let foundAll: boolean = true;
        filterTags.forEach(
          (tag)  => {
            if(project.tags.includes(tag) === false){
              foundAll = false;
            }
          }
        )

        if (foundAll){
          filterProjects.push(project);
        }
      }
    )

    return filterProjects;
  }
}
