import { NavLink } from 'react-router';

import styles from './Header.module.css' 

export function Link ({ href, children, className = "", ...restOfProps }) {
    
    return (
        <NavLink 
            to={href} 
            {...restOfProps} 
            className={({ isActive }) => [
                className,
                isActive ? styles.currentPage : ''
            ].filter(Boolean).join(' ')}
        >
            {children}
        </NavLink>
    )
}