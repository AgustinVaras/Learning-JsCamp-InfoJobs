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