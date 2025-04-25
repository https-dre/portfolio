'use client';
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { ChevronRight } from "lucide-react";

type ProjectProps = {
    name: string | null;
    description: string | null;
    image: string | null;
    link: string;
    year: number;
}

const Project = (props: ProjectProps) => {
    const [hover, setHover] = React.useState(false);

    return <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative flex flex-col max-w-[400px] gap-0 font-mono border-[2px] rounded-lg">
        {
            props.image ? (
                <img src={props.image} alt="Project Image" className="w-[100%] h-[200px] rounded-t-lg" />
            )
                : (
                    <Skeleton className="w-[100%] h-[200px]" />
                )
        }

        <div className="m-[20px] h-60 flex flex-col">
            <h2 className="mb-[15px] text-lg">{props.name}</h2>
            <p className="text-stone-400">{props.description}</p>
        </div>

        <div className="absolute bottom-[20px] px-[20px] w-full flex items-center justify-between ">
            <p className="text-[11px] bg-amber-800 px-[5px] rounded-[3px] w-min">{props.year}</p>
            <button data-hover={hover}
                onClick={() => window.open(props.link)}
                className={`flex items-center cursor-pointer transition-colors duration-300 ${hover ? "text-stone-300" : "text-transparent"}`}>
                View
                <ChevronRight size={15}/>
            </button>
        </div>
    </div>
}

export default Project;