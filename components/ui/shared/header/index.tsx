import { APP_NAME } from '@/lib/constants';
import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../button';
import ModeToggle from './mode-toggle';
import Menu from './menu';


const Header = () => {
    return(
    <header className="w-full border-b px-8 py-4">
        <div className='flex items-center justify-between'>
           <div className='flex-start'>
            <Link href='/' className="flex-start">
            <span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
            </Link>
            </div> 
            <div className="flex items-center space-x-2">
                <ModeToggle />
                <Button asChild variant='ghost'>
                    <Link href="/cart">
                    <ShoppingCart />Cart
                    </Link>
                </Button>
                <Button asChild>
                    <Link href="/sign-in">
                    <UserIcon />Sign In
                    </Link>
                </Button>
            </div>
            <Menu />
        </div>
    </header>
    )
}

export default Header