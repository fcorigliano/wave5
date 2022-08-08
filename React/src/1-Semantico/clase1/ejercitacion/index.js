const React =require('react')

/************************************************************* 
EJERCICIO 
1-Crear:
- Una cabecera
- Un menú de navegación 
- Un contenido principal

2-Dentro del contenido principal crear:
- Una sección
- Un artículo
- Una figura - Incluir aquí una imagen tuya que funcione como hipervínculo a tu perfil de Linkedin.
- Descripción de la imagen ( Podríamos poner nuestro nombre )
3-Fuera del contenido principal: 
- Pie de página donde tengamos un párrafo.
 ************************************************************/
// Tu código acá

function Home() {
	return (
		<>
			<header>Esto es una cabecera</header>
			<nav>Esto es un nav</nav>
			<main>
				<section role='section'>Esto es una sección</section>
				<article>Esto es un artículo</article>
				<figure>
					<a href='https://www.linkedin.com/in/facundo-corigliano-4285061ba/' target='_blank' rel="noreferrer"><img src='/perfil.jpg' width='200px' alt='Facundo Corigliano'></img></a>
				</figure>
			</main>
			<footer>Esto es un footer</footer>
		</>
	);
}

export default Home
