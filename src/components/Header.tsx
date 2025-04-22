'use client';

import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" }
]

const Header = () => {
    const router = useRouter();
    return (
        <header className="flex items-center justify-between h-[60px] mb-[40px]">
            <Button className="p-[0px]" variant={"ghost"} onClick={() => router.back()}>
                <ChevronLeft size={20} className="text-stone-400" />
                Voltar
            </Button>

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