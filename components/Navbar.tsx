import Link from 'next/link';
import cls from '../styles/Navbar.module.scss'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FC } from 'react';

const Navbar:FC = () => {
    const {pathname} = useRouter() 

    const navigation = [
        { id: 1, title: 'Home', path: '/' },
        { id: 2, title: 'Posts', path: '/posts' },
        { id: 3, title: 'Contacts', path: '/contacts' },
    ];


    return(
        <nav className={cls.nav}>
            <div className={cls.logo}>
                <Image alt='logo' src='/vercel.svg' width={60} height={60} />
            </div>
            <div className={cls.links}>
                {
                    navigation.map(({id, title, path}) => (
                        <Link key={id} className={pathname === path ? cls.active : null} id={id.toString()} href={path}>{title}</Link>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar;