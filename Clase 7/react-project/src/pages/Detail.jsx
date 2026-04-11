

export function Detail () {
    return (
        <main>
            <nav class="job-route">
                <div>
                    <a href="./empleos.html">Empleos </a><p> / </p><a>Ingeniero de Software Senior</a>
                </div>
            </nav>
            <article class="job-detail">
                <div>
                    <section class="job-title">
                        <div>
                            <h1>Ingeniero de Software Senior</h1>
                            <small>Tech Solutions Inc. - Remoto</small>
                        </div>
                        <button class="btn-apply-large">Aplicar ahora</button>
                    </section>
                    <section class="job-description">
                        <h2>Descripción del puesto</h2>
                        <p>Tech Solutions Inc. está buscando un ingeniero de Software Senior altamente 
                            motivado y experimentado para unirse a nuestro equipo remoto. El candidato ideal
                            tendrá una sólida formación en desarrollo de software y de alto rendimiento. Como
                            ingeniero de Software Senior, usted será responsable de liderar proyectos de desarrollo,
                            colaborar con equipos multifuncionales y garantizar la entrega de soluciones de alta calidad.
                        </p>
                    </section>
                    <section>
                        <h2>Responsibilidades</h2>
                        <ul>
                            <li>Diseñar, desarrollar y mantener aplicaciones web utilizando tecnologias modernas.</li>
                            <li>Colaborar con equipos de producto y diseño para definir y entregar nuevas características.</li>
                            <li>Escribir código limpio, eficiente y bien documentado.</li>
                            <li>Realizar revisiones de código y propocionar retroalimentación constructiva a los miembros del equipo.</li>
                        </ul>
                    </section>
                    <section>
                        <h2>Requisitos</h2>
                        <ul>
                            <li>Licenciatura en infórmatica o campo relacionado.</li>
                            <li>Mínimo de 5 años de experiencia en desarrollo de Software.</li>
                            <li>Experiencia con Frameworks JavaScript (React, Angular, Vue.JS).</li>
                            <li>Familiaridad con métodologias agiles y herramientas de control de versiones (GIT).</li>
                        </ul>
                    </section>
                    <section>
                        <h2>Acerca de la empresa</h2>
                        <p>
                            Tech Solutions Inc. es una empresa líder en tecnología dedicada a proporcionar soluciones innovadoras
                            a clientes de todo el mundo. Nos enorgullecemos de nuestra cultura de trabajo colaborativa y nuestro
                            compromiso con el desarrollo profesional continuo.
                        </p>
                    </section>
                    <hr/>
                    <div class="bottom-btn-wrapper" >
                        <button id= "inferior-btn" class="btn-apply-large">Aplicar ahora</button>
                    </div>
                </div>
                <button class="btn-apply-large">Aplicar ahora</button> 
            </article>
        </main>
    );
};