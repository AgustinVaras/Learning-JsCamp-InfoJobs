const jobListingDiv = document.querySelector('.job-listing');

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