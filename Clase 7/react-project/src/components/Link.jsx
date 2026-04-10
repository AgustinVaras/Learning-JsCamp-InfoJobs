import { Link as NavLink, useLocation } from 'react-router';

import styles from './Header.module.css' 

export function Link ({ href, children, ...restOfProps }) {
    const currentPage = useLocation().pathname;
    return (
        <NavLink 
            to={href} 
            {...restOfProps} 
            className={
                href === currentPage 
                ?  styles.currentPage
                : ''
            }
        >
            {children}
        </NavLink>
    )
}