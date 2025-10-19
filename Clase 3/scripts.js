
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


