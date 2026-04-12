import { Link as NavLink, useLocation } from 'react-router';

import styles from './Header.module.css' 

export function Link ({ href, children, className, ...restOfProps }) {
    const currentPage = useLocation().pathname;
    
    const linkClass = [
        className,
        href === currentPage ? styles.currentPage : ''
    ].filter(Boolean).join(' ');
    
    return (
        <NavLink 
            to={href} 
            {...restOfProps} 
            className={linkClass}
        >
            {children}
        </NavLink>
    )
}