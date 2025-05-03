'use client'
import { Button } from "@/components/ui/button";
import { ChevronRight, Link2, Github } from "lucide-react";
import * as React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const menu_buttons_style = "w-[100%] bg-transparent text-[15px] py-[20px] px-[10px] text-stone-400 hover:bg-stone-900 cursor-pointer"
  const [showLink, setShowLink] = React.useState(false);
  const router = useRouter();

  return (
    <div className="flex justify-center h-full w-full">
      <div className="p-2  my-auto font-mono w-[400px]">
        <div className="flex gap-2 hover:text-white transition-colors">
          <p className="text-stone-400 mb-[5px] ">taboão da serra, sp</p>
        </div>

        <h1 className="font-bold text-2xl mb-[10px]">André Dias</h1>
        <p className="text-stone-400 mb-[20px]">Back-End Developer / Freelancer</p>
        <p className="text-stone-300">MENU</p>
        <div className="py-[20px]">
          <Button className={menu_buttons_style} onClick={() => router.push("/unknown")}>
            About
            <ChevronRight size={20} className="ml-auto" />
          </Button>
          <Button className={menu_buttons_style} onClick={() => router.push("/projects")}>
            Projects
            <ChevronRight size={20} className="ml-auto"/>
          </Button>
          <Button className={menu_buttons_style} onClick={() => router.push("/unknown")}>
            Shop
            <ChevronRight size={20} className="ml-auto"/>
          </Button>
          <Button className={menu_buttons_style} onClick={() => router.push("/unknown")}>
            Contact
            <ChevronRight size={20} className="ml-auto" />
          </Button>
        </div>
        <hr />
        {
          showLink ? (
            <div className="flex items-center mt-[10px]">
              <Button 
              variant={"ghost"}
              onClick={() => window.open("https://github.com/https-dre", "GitHub Profile")}
              >
                <Github size={20} className="text-stone-400"/>
              </Button>

            </div>
          )
            : (
              <div className="flex items-center justify-between mt-[10px]">
                <Button variant={"ghost"}
                  onClick={() => setShowLink(true)}
                >
                  <Link2 size={15} className="text-stone-400" />
                </Button>
                <p className="text-stone-400 p-[10px] text-[12px]">v1.0</p>
              </div>
            )
        }
      </div>
    </div>
  );
}