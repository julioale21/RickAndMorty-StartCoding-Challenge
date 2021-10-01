<br/><br/>
<br/><br/>

<p align="center">
    <img height="100" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/MQ7g16QSQhaKHkDUFOFn">
   </p>
   
   
   <br/><br/>
    
 
   
   <br/><br/>
   

   <h1 align="center">Rick and Morty - Start Coding Frontend Challenge</h1>
   
   
### [📖 Go to CHANGELOG.md to see the changelog](CHANGELOG.md)

  
## El Challenge

El siguiente challenge requiere que pongas en práctica los conocimientos y habilidades adquiridas a lo largo del curso de Reactbásico y avanzado.

### Descripción del proyecto.

El proyecto consiste en una aplicación web que funcionará como una wiki de la serieRick & Morty.

El objetivo de la aplicación es ofrecer a las personas usuarias un lugar en donde obtener información sobre los personajes, lugaresy episodios de dicha serie.

En la pantalla principal la persona accede a un dashboard web que le mostrará los primeros 10 personajes que hayan sido marcados como favoritos por el usuario. 

Deberá implementar paginación para el caso de que existan más de 10 personajes favoritos. 

El usuario tendrá la posibilidad de remover cualquiera de dichos personajes para eliminarnos de la lista. 

La acción del usuario deberá persistir aun en el caso de que el mismo cierre la aplicación y vuelva a abrirla. 

Además se mostrará un sidebar mediante el cual podrá acceder a las diferentes secciones de la aplicación:-Dashboard-Personajes-Episodios Lugares 

Al acceder a las secciones Personajes, Episodioso, Lugares, la persona verá un listado de los primeros 20 resultados obtenidos. 

Se deberá implementar paginación de modo tal que la persona pueda obtener más resultados avanzando y retrocediendo entre las distintas páginas. 

Cada resultado estará representado por una tarjeta que contendrá información mínima del personaje, lugar o episodio(segúnelcaso): Nombre e imagen(encasodequeseencuentredisponible). 

A su vez, cada card contendrá un botón “Verdetalle”, el cual deberá redirigir a una página que contendrá información detallada sobre el personaje, episodio o lugar seleccionado(paraesto,sedeberánconsumirla información de cada tipo que se encuentra disponibleen la API).

Por otro lado, en todas las secciones deberá implementarse un filtro de búsqueda que permita al usuario ingresar un criterio para filtrar/buscar Personajes, episodiosolugares, según sea el caso. 

Los criterios de búsqueda variarán dependiendo del tipo de recurso, conforme las opciones que ofrece la API para cada caso. 

Sin perjuicio de ello, en todos los casos la búsqueda se realizará a partir de que el usuario tipee el 3 carácter dentro del input correspondiente. 

Tanto dentro de la sección de resultados como así también dentro de la página con el detalle de cada personaje, la persona deberá visualizar si el personaje ha sido previamente marcado como favorito y, además, podrá marcar/desmarcar el mismo para modificar tal condición. 

Los cambios del usuario deberán persistir, no sólo mientras el mismo se encuentre navegando(esdecir, si navega al dashboard luego de agregar/quitar un personaje de favoritos), sino también en caso de que cierre la aplicación y vuelva a abrirla.

### Requerimientos Técnicos.

    - Utilizar NextJs con Typescript (preferentemente laúltima versión estable).
    - La información necesaria para completar el challengeprovendrá deesta API.
    - Tener en cuenta que la API se encuentra paginada, por lo que deberá implementarse la lógica correspondiente para obtener el resultado descrito anteriormente.
    - Utilizar Functional components y hooks.
    - Utilizar styled components para estilar los componentes.
    - Se deberá emplear algún patrón de manejo de estado global(Redux,Context) a elección.
    - En caso de que el usuario ingrese una url no válida, se deberá mostrar una página 404 con un botón que redirige a la Home.
    - Se valorará el uso de las distintas técnicas de manejode errores.
    - Se valorará la experiencia del usuario durante el proceso de carga de información (loading).
    - El diseño es de elección libre, sin perjuicio de lo cual se deja el siguiente layout a modo de referencia.



## Proyecto

### Herramientas

- Nextjs
- React.js
- Styled Components
- Redux
- Lottie
- Axios
- Release-it

### Estructura del proyecto
Los archivos del proyecto estan estructurados de la siguiente manera:

    ├── apollo              
    ├── components
    ├── hooks         
    ├── interfaces     
    ├── models           
    ├── pages  
        _app.tsx
        index.tsx
        404.tsx
    ├── public          
    ├── redux       
    ├── styles   
    ├── utils  

    └── README.md            # The first page that the user will view when will visit the repository.

## Requirimientos técnicos
* npm or yarn
* Git

## Despliegue local

* Clonar el repositorio.
* Ejecutar el comando `npm install`
* Agregar en .env la siguiente variable API_URL=hhttps://rickandmortyapi.com/graphql
* Ejecutar el comando `npm run dev`
