import { state } from './config.js'

state.count++

//Busco el search Input
const searchBar = document.querySelector('#search-input');

//Consigo las jobCards
const getJobCards = () => {
    return document.querySelectorAll('.job-card');
};
//Consigo el elemento con el  título
const getTitle = article => {
    return article.querySelector('h3');
};

//Valido que la barra de búsqueda no esté vacía al momento de hacer la comparación
const validateEmptySearchBar = () => {
    const text = searchBar.value.trim();
    return text !== '';
};

//Valido si el trabajo debe ser filtrado o no
const isFiltered = (article) => {
    const search = searchBar.value.toLowerCase();
    const title = getTitle(article).textContent.trim().toLowerCase();

    if(!validateEmptySearchBar()) return true;

    return title.includes(search) ? true : false
}; 

//Aplico los resultados de busqueda
const search = () => {
    const jobs = getJobCards();
    jobs.forEach( job => {
        const filtered = !isFiltered(job);
        job.classList.toggle('filtered', filtered);
    });
};

searchBar?.addEventListener('keyup', (event) => {
    search();
});