
//Fetch data from JSON file

// Evento onClick para el  botón  "Aplicar" en las ofertas de trabajo
const jobListingDiv = document.querySelector('.job-listing');

jobListingDiv?.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.classList.contains('btn-apply')) {
        target.classList.add('is-applied');
        target.textContent = '¡Aplicado!';
        target.disabled = true;
    }
})

fetch('./data.json')
    .then((response) => {
        return response.json();
})
    .then((jobs) => {
        jobs.forEach(job => {
            const newArticle = document.createElement('article');
            newArticle.className = 'job-card';
            newArticle.dataset.modalidad = job.data.modalidad;
            newArticle.dataset.nivel = job.data.nivel;
            newArticle.dataset.technology = job.data.technology;
            
            newArticle.innerHTML = `
                <div>
                    <h3>${job.titulo}</h3>
                    <p><small class="job-list-details">${job.empresa} | ${job.ubicacion}</small></p>
                    <p class="job-list-paragraph">${job.descripcion}</p>
                </div>
                <button id="btn-1" class="btn-apply">Aplicar</button>
            `;
            jobListingDiv.appendChild(newArticle);
        });
    });
//-------------------------------
// Evento onChange para los filtros en las ofertas de trabajo
// const locationFilter = document.querySelector('#location-filter');
// locationFilter.addEventListener('change', (event) => { 
//     console.log(event.target.value);
//     const modalidad = event.target.value;
//     // Conseguimos los articles de las ofertas de trabajo
//     const jobArticles = document.querySelector('.job-listing').querySelectorAll('small');

//     jobArticles?.forEach(subHeading => {
//         const location = subHeading.textContent.split(' | ')[1];
        
//         if(modalidad === 'Remoto'){
//             location === 'Remoto' ? subHeading.parentElement.parentElement.parentElement.classList.remove('filtered') : subHeading.parentElement.parentElement.parentElement.classList.add('filtered');
//         }
//         else if(modalidad === 'Presencial' ){
//             location === 'Remoto' || location === 'Hibrido' ? subHeading.parentElement.parentElement.parentElement.classList.add('filtered') : subHeading.parentElement.parentElement.parentElement.classList.remove('filtered');
//         } else if (modalidad === 'Hibrido') {
//             location === 'Hibrido' ? subHeading.parentElement.parentElement.parentElement.classList.remove('filtered') : subHeading.parentElement.parentElement.parentElement.classList.add('filtered'); 
//         }
//     });
// });

// Consigo todos los elementos de filtrado
const getFilters = () => ({
    technology: document.querySelector('#technology-filter'),
    location: document.querySelector('#location-filter'),
    modality: document.querySelector('#modality-filter'),
    experience: document.querySelector('#experience-filter')
});

//Armo un objeto con los values de los filtros activos
const getActiveFilters = () => {
    const filters = getFilters();
    toggleNullFilterOptions(filters);
    return {
        technology: filters.technology.value,
        location: filters.location.value,
        modality: filters.modality.value,
        experience: filters.experience.value,
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
        // console.log(filter + " | " + firtsOption.disabled);
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
    const { detail, description } =  extractJobText(article); 
    console.log(Object.values(filters));
    if(!activeFiltersValidation(filters)) return false;

    if(filters.technology && !description.includes(filters.technology.toLowerCase())) return true;
    if(filters.modality && !description.includes(filters.modality.toLowerCase())) return true;
    if(filters.location && !detail.includes(filters.location.toLowerCase())) return true;

    return false;
};

//Activo o escondo los articles
// const toggleArticle = (article, show) => {
//     console.log(article);
//     article.style.display = show ? 'flex': 'none'; //TO DO: Arreglar para que esconda las cards con una clase
// }

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
