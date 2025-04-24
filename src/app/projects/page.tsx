'use client';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
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
    const [searchContent, setSearchContent] = React.useState("");

    const years_list = React.useMemo(() => {
        return [...new Set(projects.map(project => project.year))];
    }, []);

    const filteredProjects = React.useMemo(() => {
        if (year === "All" && searchContent.trim() == "") return projects;
        
        if (searchContent.trim() == "") {
            return projects.filter(project => project.year === parseInt(year));
        }

        if (year === "All") {
            return projects.filter(project => project.name.toLowerCase()
            .includes(searchContent.toLowerCase()));
        }

        return projects.filter(project => project.year === parseInt(year) && project.name.toLowerCase()
            .includes(searchContent.toLowerCase()));

    }, [year, searchContent]);

    return (
        <div className="flex flex-col lg:items-center font-mono p-12">
            <div className="max-w-6xl">
                <Header />


                <h1 className="text-4xl font-bold">Projects</h1>
                <p className="text-stone-300 my-2">Explore my portfolio of projects.</p>

                <div className="my-[20px] flex items-center justify-between">
                    <div>
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
                    <div className="flex w-[350px] relative border rounded-lg p-2 focus:outline-none">
                        <input type="text" placeholder="Search..." className="border-0 focus:outline-none w-[90%]"
                            onChange={(e) => setSearchContent(e.target.value)} value={searchContent} />
                        <Search className="absolute m-0 text-stone-400 right-[10px]" />
                    </div>

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