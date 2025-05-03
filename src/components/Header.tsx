'use client';

import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const navItems = [
    { name: "About", href: "/unknown" },
    { name: "Projects", href: "/projects" },
    { name: "Shop", href: "/unknown" },
    { name: "Contact", href: "/unknown" }
]

const Header = () => {
    const router = useRouter();
    return (
        <header className="flex items-center justify-between h-[60px] mb-[40px]">
            <button className="p-[0px] flex items-center gap-2 cursor-pointer" 
            
                onClick={() => router.back()}>
                <ChevronLeft size={20} className="text-stone-400" />
                Voltar
            </button>

            <nav>
                {navItems.map((item) => (
                    <Button key={item.href} variant="link" onClick={() => router.push(item.href)} className="text-stone-400 hover:text-white">
                        {item.name}
                    </Button>
                ))}
            </nav>
        </header>
    )
}

export default Header;