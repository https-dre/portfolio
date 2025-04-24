'use client';
import { Skeleton } from "./ui/skeleton";
import { SquareArrowOutUpRight } from "lucide-react"
type ProjectProps = {
    name: string | null;
    description: string | null;
    image: string | null;
    link: string | null;
    year: number;
}

const Project = (props: ProjectProps) => {
    return <div className="flex flex-col max-w-[400px] gap-0 font-mono border-[2px] rounded-lg">
        {
            props.image ? (
                <img src={props.image} alt="Project Image" className="w-[100%] h-[200px] rounded-t-lg" />
            )
                : (
                    <Skeleton className="w-[100%] h-[200px]" />
                )
        }

        <div className="relative p-[20px] h-60  flex flex-col">
            <h2 className="mb-[15px] text-lg">{props.name}</h2>
            <p className="text-stone-400">{props.description}</p>
            <p className="absolute bottom-[20px] text-[11px] bg-stone-500 px-[5px] rounded-[3px] w-min">{props.year}</p>
        </div>

    </div>
}

export default Project;

