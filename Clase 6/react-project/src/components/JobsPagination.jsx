import styles from "./Pagination.module.css";

export function JobsPagination( { currentPage = 1, totalPages = 1, onPageChange } ) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const stylePrevBtn = isFirstPage ? { pointerEvents: 'none', opacity: 0.5 } : {};
    const styleNextBtn = isLastPage ? { pointerEvents: 'none', opacity: 0.5 } : {};
    
    const handlePrevClick = ( e ) => {
        e.preventDefault();
        if ( !isFirstPage ) {
            onPageChange( currentPage - 1 );
        }
    }

    const handleNextClick = ( e ) => { 
        e.preventDefault();
        if ( !isLastPage ) {
            onPageChange( currentPage + 1 );
        }
    }

    const handleChangePage = ( page, e ) => {
        e.preventDefault();
        if ( page !== currentPage ) {
            onPageChange( page );
        }
    }

    return (
        <nav className={styles.pagination}>
            <div className={styles.paginationAnchors}>
                
                <a href="" style={stylePrevBtn} onClick={handlePrevClick}>
                    <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 6l-6 6l6 6" />
                    </svg>
                </a>
                
                {pages.map(page => (
                    <a 
                    key={page}
                    href="" 
                    className={page === currentPage ? styles.isActive : ""}
                    onClick={ ( event ) => handleChangePage( page, event )}>
                        {page}
                    </a>  
                ))}
                <a href="" style={styleNextBtn} onClick={handleNextClick}>
                    <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 6l6 6l-6 6" />
                    </svg>
                </a>
            </div>
        </nav>
    )
}

