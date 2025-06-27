import { Injectable, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Course Register System',
      picture: '../../assets/angular_material.png',
      projectLink:
        'https://github.com/GongVictorFeng/course_register?tab=readme-ov-file',
      url: 'https://course-register-e5ab4.web.app',
      summary:
        'Angular-based course registration platform with instructor management features.',
      description:
        'A modular Angular 19 application built with standalone components and Angular Material. Designed for course registration, it supports instructor workflows and is deployed on Firebase. Future-proof architecture allows seamless expansion to full-stack capabilities.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS],
    },
    {
      id: 1,
      name: 'Personal Portfolio',
      picture: '../../assets/home_page.png',
      projectLink: 'https://github.com/GongVictorFeng/personal-portfolio',
      url: 'https://personal-portfolio-a67e2.web.app',
      summary: 'Interactive showcase of professional work and credentials.',
      description:
        'Four-page Angular Material portfolio featuring: Home (introduction), Projects (case studies), Resume (professional history), and Contact (form submission). Demonstrates clean UI/UX principles and Firebase deployment.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS],
    },
    {
      id: 2,
      name: 'Course Register Server',
      picture: '../../assets/course_register_server.png',
      projectLink: 'https://github.com/GongVictorFeng/course_register_server',
      url: '',
      summary: 'Backend service for course registration system APIs.',
      description:
        'Lightweight Node.js/Express server deployed on Render. Provides RESTful endpoints for course/lesson data management, supporting the Angular frontend with optimized data retrieval patterns.',
      tags: [Tag.JAVASCRIPT, Tag.NODEJS],
    },
    {
      id: 3,
      name: 'Patient Management System',
      picture: '../../assets/patient_management_system.png',
      projectLink: 'https://github.com/GongVictorFeng/PatientManagementSystem',
      url: 'https://drive.google.com/file/d/1tfZ0PT_y667y2jh1rs-iNvEB0Ng3u3yY/view',
      summary: 'Full-stack healthcare application with clean architecture.',
      description:
        'Collaborative academic project featuring: React frontend, Spring Boot backend (domain-driven design), and Kotlin integration. My contributions included database architecture and implementing clean architecture layers (Domain, Application, Adapters, Infrastructure). Includes demo video.',
      tags: [Tag.REACT, Tag.NODEJS, Tag.KOTLIN, Tag.SPRINGBOOT],
    },
    {
      id: 4,
      name: 'Angular Signals Exploration',
      picture: '../../assets/angular_signal.png',
      projectLink: 'https://github.com/GongVictorFeng/Angular_Signal',
      url: '',
      summary:
        "Experimental implementation of Angular's signal-based reactivity.",
      description:
        'Proof-of-concept course registration app built with Angular Signals instead of RxJS. Demonstrates modern Angular state management patterns and compares signal-based vs observable-based architectures.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS],
    },
    {
      id: 5,
      name: 'Design Patterns in Java',
      picture: '../../assets/design_patterns.png',
      projectLink: 'https://github.com/GongVictorFeng/Design-Patterns',
      url: '',
      summary:
        'Practical implementations of design patterns and SOLID Principles.',
      description:
        'Growing Java reference demonstrating classic design patterns. Serves as both educational resource and personal pattern library for future projects.',
      tags: [Tag.JAVA],
    },
    {
      id: 6,
      name: 'Data Structures & Algorithms',
      picture: '../../assets/data_structure_algorithm.png',
      projectLink: 'https://github.com/GongVictorFeng/dataStructureAndAlgo',
      url: '',
      summary: 'Java implementations of core CS concepts.',
      description:
        'Leetcode-style solutions and classic algorithm implementations in Java. Covers data structures (trees, graphs) and algorithms (sorting, searching) with performance analysis. Continuously updated.',
      tags: [Tag.JAVA],
    },
    {
      id: 7,
      name: 'Spring Boot Fundamentals',
      picture: '../../assets/Spring-Boot-Features.png',
      projectLink: 'https://github.com/GongVictorFeng/springboot_intro',
      url: '',
      summary:
        'Comprehensive Spring Boot learning project covering core concepts and production-ready features.',
      description:
        'An educational repository demonstrating essential Spring Boot capabilities including: auto-configuration, starter projects, profiles for environment-specific configuration (dev/prod), Spring Boot Actuator for monitoring, and embedded servers. Includes practical implementations of dependency management, web application setup, and non-functional requirement handling. Serves as both a learning resource and template for production-grade Spring Boot applications.',
      tags: [Tag.JAVA, Tag.SPRINGBOOT],
    },
    {
      id: 8,
      name: 'Spring Framework Core Concepts',
      picture: '../../assets/spring-framework.png',
      projectLink: 'https://github.com/GongVictorFeng/springframwork_intro',
      url: '',
      summary:
        'Educational project demonstrating Spring Framework fundamentals through game implementation iterations.',
      description:
        "A hands-on exploration of Spring Framework's core principles featuring three progressive implementations: 1) Tightly-coupled architecture, 2) Interface-based loose coupling, and 3) Spring-managed dependency injection. Covers essential concepts like @Component, @Autowired, IoC container, component scanning, and dependency injection types. Includes practical examples of constructor-based vs setter-based injection and demonstrates how Spring simplifies complex application architecture by managing object lifecycles and dependencies.",
      tags: [Tag.JAVA, Tag.SPRINGBOOT],
    },
    {
      id: 9,
      name: 'RESTful Social Media API',
      picture: '../../assets/spirng-rest.png',
      projectLink: 'https://github.com/GongVictorFeng/restful-web-service',
      url: '',
      summary:
        'Production-grade Spring Boot REST API implementing enterprise patterns and best practices.',
      description:
        'Social media backend API demonstrating: RESTful standards (HATEOAS, content negotiation), Spring Security, JPA/Hibernate integration, and OpenAPI documentation. Features advanced implementations of internationalization (i18n), dynamic response filtering, and API versioning strategies. Includes H2/MySQL database support and comprehensive error handling with proper HTTP status codes (400, 404, 500). Implements DispatcherServlet patterns and Jackson serialization configurations.',
      tags: [Tag.JAVA, Tag.SPRINGBOOT],
    },
    {
      id: 10,
      name: 'Microservices with Spring Cloud',
      picture: '../../assets/spring-cloud.png',
      projectLink:
        'https://github.com/GongVictorFeng/microservice-with-spring-cloud',
      url: '',
      summary:
        'Spring Cloud-based microservices architecture implementing enterprise patterns.',
      description:
        'Comprehensive microservices implementation featuring: Spring Cloud Config (centralized configuration), Eureka service discovery, API Gateway with dynamic routing, and Resilience4j fault tolerance (Circuit Breaker, RateLimiter, Bulkhead). Demonstrates production-grade patterns including load balancing with Feign/RestTemplate, environment-specific configurations, and distributed tracing. Includes Docker readiness and Kubernetes compatibility for cloud-native deployment.',
      tags: [Tag.JAVA, Tag.SPRINGBOOT],
    },
    {
      id: 11,
      name: 'Docker Fundamentals & Microservices Orchestration',
      picture: '../../assets/docker_intro.png',
      projectLink: 'https://github.com/GongVictorFeng/docker_intro',
      url: '',
      summary:
        'Comprehensive Docker learning project with Spring Boot microservices orchestration.',
      description:
        'Educational repository covering Docker fundamentals including: image creation, multi-stage builds, layer caching optimizations, and Docker Compose for microservices orchestration. Features Spring Boot Maven plugin integration for containerization, Docker networking concepts, and practical implementations of production patterns like centralized configuration, service discovery, and distributed tracing with Zipkin. Includes docker-compose.yaml for multi-container management and demonstrates Docker deployment best practices across different environments.',
      tags: [Tag.JAVA, Tag.SPRINGBOOT],
    },
    {
      id: 12,
      name: 'Kubernetes Fundamentals & Microservices Orchestration',
      picture: '../../assets/kubernetes_intro.png',
      projectLink: 'https://github.com/GongVictorFeng/kubernetes-intro',
      url: '',
      summary:
        'Comprehensive Kubernetes learning project with GKE implementation for Spring Boot microservices.',
      description:
        'Hands-on Kubernetes implementation covering cluster management, declarative configuration, and production-grade orchestration features. Includes deployment of currency-exchange and currency-conversion microservices on Google Kubernetes Engine (GKE) with: auto-scaling (HPA and cluster), service discovery, LoadBalancer services, ConfigMaps, Secrets, and node pool management. Demonstrates rolling deployments, health checks, GPU node attachment, and declarative YAML configuration for zero-downtime deployments.',
      tags: [Tag.JAVA, Tag.SPRINGBOOT],
    },
  ];

  constructor() {}

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) {
    const project = this.projects.find((project) => project.id === id);
    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }
    return project;
  }

  getProjectsByFilter(filterTags: Tag[]): Project[] {
    const filterProjects: Project[] = [];

    this.projects.forEach((project) => {
      let foundAll: boolean = true;
      filterTags.forEach((tag) => {
        if (project.tags.includes(tag) === false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filterProjects.push(project);
      }
    });

    return filterProjects;
  }
}
