import styles from './NoResults.module.css';

export function NoResults() {
  return (
    <div className={styles.no_results}>
      <h3>No se encontraron han encontrado empleos que coincidan con los criterios de búsqueda.</h3>
    </div>
  );
}
