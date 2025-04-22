'use client';
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Project from "@/components/Project";

const projects = [
    {
        name: "Mindful Nest",
        description: "Aplicativo desenvolvido para o projeto interdisciplinar da ETEC De Taboão Da Serra - 2ºA 2024. ",
        image: null,
        link: "https://github.com/https-dre/mindful-nest-app",
        year: "2024"
    },
    {
        name: "The Green Family",
        description: "Aplicativo desenvolvido para competir na 8º ONDA (Olimpíada Nacional De Aplicativos).",
        image: null,
        link: "https://github.com/https-dre/the-green-family",
        year: "2024"
    }
]

const Projects = () => {
    const router = useRouter();
    return (
        <div className="font-mono p-[30px]">
            <Header />
            <h1 className="text-4xl font-bold">Projects</h1>
            <p className="text-stone-300 my-2">Explore my portfolio of projects.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {projects.map(project => (
                    <Project name={project.name}
                        description={project.description}
                        image={project.image} link={project.link}
                        key={Math.random()}
                        year={project.year}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects;