import Link from "next/link"
import { Button } from "../../button"
import ModeToggle from "./mode-toggle"
import { ShoppingCart, UserIcon } from "lucide-react"

const Menu = () => {
    return (
        <div className="flex justify-end gap-3">
            <nav className="hidden  md:flex w-full max-w-xs gap-1">
                <ModeToggle />
                <Button asChild variant='ghost'>
                    <Link href="/cart">
                    <ShoppingCart />Cart
                    </Link>
                </Button>
                <Button asChild variant='ghost'>
                    <Link href="/sign-in">
                    <UserIcon />Sign In
                    </Link>
                </Button>
            </nav>
        </div>
    )
}