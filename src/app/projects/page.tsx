'use client';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Project from "@/components/Project";
import React from 'react';

const projects = [
    {
        name: "Mindful Nest",
        description: "Aplicativo desenvolvido para o projeto interdisciplinar da ETEC De Taboão Da Serra - 2ºA.",
        image: null,
        link: "https://github.com/https-dre/mindful-nest-app",
        year: 2024
    },
    {
        name: "The Green Family",
        description: "Aplicativo desenvolvido para competir na 8º ONDA (Olimpíada Nacional De Aplicativos).",
        image: null,
        link: "https://github.com/https-dre/the-green-family",
        year: 2024
    },
    {
        name: "Wikimedic",
        description: "Sistema para consulta e gerenciamento de bulas digitais. Desenvolvido para o projeto interdisciplinar da ETEC De Taboão Da Serra - 1ºA.",
        image: null,
        link: "https://github.com/https-dre/server-wikimedic",
        year: 2023
    }
]

const Projects = () => {
    const router = useRouter();
    const [year, setYear] = React.useState("All");

    const years_list = React.useMemo(() => {
        return [...new Set(projects.map(project => project.year))];
    }, []);

    const filteredProjects = React.useMemo(() => {
        if (year === "All") return projects;
        return projects.filter(project => project.year === parseInt(year));
    }, [year]);

    return (
        <div className="flex flex-col lg:items-center font-mono p-12">
            <div className="max-w-6xl">
                <Header />


                <h1 className="text-4xl font-bold">Projects</h1>
                <p className="text-stone-300 my-2">Explore my portfolio of projects.</p>

                <div className="my-2">
                    <Button
                        variant={year === "All" ? "default" : "ghost"}
                        onClick={() => setYear("All")}
                    >
                        All
                    </Button>
                    {years_list.map(yearItem => (
                        <Button
                            key={yearItem}
                            variant={year === yearItem.toString() ? "default" : "ghost"}
                            onClick={() => setYear(yearItem.toString())}
                        >
                            {yearItem}
                        </Button>
                    ))}
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {filteredProjects.map(project => (
                        <Project
                            key={`${project.name}-${project.year}`}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                            year={project.year}
                        />
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Projects;