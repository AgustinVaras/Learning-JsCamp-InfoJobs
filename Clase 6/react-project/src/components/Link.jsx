import { useRouter } from '../hooks/useRouter.jsx';

import styles from './Header.module.css' 

export function Link ({ href, children, ...restOfProps }) {
    const { navigateTo, currentPath } = useRouter();
    const handleClick = (event) => {
        event.preventDefault();

        navigateTo(href);
    }
    
    return (
        <a 
            href={href} 
            {...restOfProps} 
            onClick={handleClick}
            className={
                href === currentPath 
                ?  styles.currentPage
                : ''
            }
        >
            {children}
        </a>
    )
}