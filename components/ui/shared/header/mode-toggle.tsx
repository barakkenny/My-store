'use client'

import { useTheme } from "next-themes";
import { 
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
 } from "../../dropdown-menu";
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../../button";


const ModeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) {
        return null;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' 
                className="focus-visible:ring-0 focus-visible:ring-offset-0">
                  {theme === 'system' ? (
                    <SunMoon  />
                ): theme === 'dark' ? (
                    <MoonIcon />
                ) : (
                    <SunIcon />
                )
                }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={ theme === 'system'}
                onClick={() => setTheme('system')}>
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={ theme === 'Dark'}
                onClick={() => setTheme('Dark')}>
                    Dark
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={ theme === 'Light'}
                onClick={() => setTheme('Light')}>
                    Light
                </DropdownMenuCheckboxItem>  
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ModeToggle;