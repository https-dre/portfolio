'use client';
import { Skeleton } from "./ui/skeleton";
import { SquareArrowOutUpRight } from "lucide-react"
type ProjectProps = {
    name: string | null;
    description: string | null;
    image: string | null;
    link: string | null;
    year: string;
}

const Project = (props: ProjectProps) => {
    return <div className="flex-col font-mono border-[2px] rounded-lg">
        {
            props.image ? (
                <img src={props.image} alt="Project Image" className="rounded-t-lg w-[100%]" />
            )
            : (
                <Skeleton className=" w-[100%] h-[200px]" />
            )
        }
        
        
        <div className="p-[20px]">
            <h2 className="mb-[15px] text-lg">{props.name}</h2>
            <p className="text-stone-400">{props.description}</p>

            <div className="flex items-align justify-between mt-[20px]">
                <p className="text-[11px] items-align bg-stone-500 px-[5px] rounded-[3px]">{props.year}</p>
                <button>
                    <SquareArrowOutUpRight className="text-stone-400" size={15}/>
                </button>
            </div>
        </div>
    </div>
}

export default Project;

