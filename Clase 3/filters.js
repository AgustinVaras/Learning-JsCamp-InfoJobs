import { state } from './config.js'

state.count++

console.log(state)

// Consigo todos los elementos de filtrado
const getFilters = () => ({
    technology: document.querySelector('#technology-filter'),
    location: document.querySelector('#location-filter'),
    level: document.querySelector('#level-filter'),
    contract: document.querySelector('#contract-filter')
});

//Armo un objeto con los values de los filtros activos
const getActiveFilters = () => {
    const filters = getFilters();
    toggleNullFilterOptions(filters);
    return {
        technology: filters.technology.value,
        location: filters.location.value,
        level: filters.level.value,
        contract: filters.contract.value,
    }
};

const activeFiltersValidation = (activeFilters) => {
    const values = Object.values(activeFilters);
    return values.some(value => value.trim() !== '');
};

const toggleNullFilterOptions = (filters) => {
    Object.values(filters).forEach( filter => {
        const firtsOption = filter.querySelector('option:first-child');
        if(filter.value.trim() !== '') {
            firtsOption.disabled = false;
        } else firtsOption.disabled = true;
    });
}; 

//Consigo todos los articles de los trabajos
const getJobsArticles = () => document.querySelectorAll('.job-card');

//Consigo los textos de los subtittulos y los parrafos
const extractJobText  = (article) => {
    const details = article.querySelector('.job-list-details');
    const paragraph = article.querySelector('.job-list-paragraph');

    return {
        detail: details ? details.textContent.trim().toLowerCase() : '', 
        description: paragraph ? paragraph.textContent.trim().toLowerCase() : '' 
    };
};

//Comparo los valores
const filter = (article, filters) => {
    const { modalidad, nivel, technology} = article.dataset;
    console.log(Object.values(filters));
    if(!activeFiltersValidation(filters)) return false;

    if(filters.technology && !technology.includes(filters.technology.toLowerCase())) return true;
    if(filters.level && !nivel.includes(filters.level.toLowerCase())) return true;
    if(filters.location && !modalidad.includes(filters.location.toLowerCase())) return true;

    return false;
};


//Aplico los filtros
const applyFilters = () => {
    const filters = getActiveFilters();
    const articles = getJobsArticles();

    articles.forEach( article => {
        const isFiltered = filter(article, filters);
        article.classList.toggle('filtered', isFiltered);
    });
}

//Añado los eventos de los filtros
const activateFilters = () => {
    const filters = getFilters();
    console.log('Activando filtros . . .');
    Object.values(filters).forEach( filter => {
        filter.addEventListener('change', applyFilters);
    });
}

activateFilters();