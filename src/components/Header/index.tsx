import React from 'react';
import Cart from '../../assets/Cart';
import Avatar from '../../assets/Avatar';
import { HeaderProps } from '../../types';
import { Link } from 'react-router-dom';

const Header = (props: HeaderProps) => {

    const { cartItems } = props;
    return (
        <header>
            <nav className="border-gray-200 px-4 lg:px-6 py-6 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">PaperWorks</span>
                    <div className="flex items-center gap-4 lg:order-2">
                        <Link to='/cart' className='flex justify-center items-center gap-1 text-white'><Cart/> <span className='p-4 rounded-full bg-neutral-200]'>{cartItems}</span></Link>
                        <Avatar/>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
