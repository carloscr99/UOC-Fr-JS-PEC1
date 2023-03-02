### 1. La aparición de HTML5 / CSS3 / Js ha supuesto el nacimiento del desarrollo front-end moderno.

 - ¿Cuál es la ventaja del uso de etiquetas semánticas?
   -  Las etiquetas semánticas son elementos HTML que proporcionan un significado al contenido de la página web.
   -  Existen distintas ventajas sobre el uso de las etiquetas semánticas, algunas de estas ventajas son:
      -  **Mejora la accesibilidad**: Las etiquetas semánticas ayudan a las personas con discapacidades visuales a navegar por la web al proporcionar una estructura clara, y que los lectores de pantalla pueden seguir correctamente la estructura de nuestra página. 
      -  **Mejora la optimización**: Ayuda a los motores de búsqueda, identificar más facilmente el contenido y la estructura de nuestra página web, así como a la indexación de la misma.



- Cita al menos 3 `APIs HTML5` y explica brevemente su funcionalidad:
  
  - Disponemos de varias APIs que nos ayudan en la creación de nuestra página web. Por nombrar algunos de ellos, son:
    - **DOM**: Nos proporciona una API para el manejo tanto del HTML como del CSS, permitíendonos la reación, modificación y eliminación de elementos, pudiendo crear unas páginas más dinámicas.
    - **Geolocalización API**: Recopila la información geográfica del usuario, pudiendo utilizarla con distintas finalizades, como por ejemplo, ubicar al usuario en un mapa, seleccionar el idioma predetermiando de nuestra página... entre otras opciones.
    - **HTMLMediaElement y WebRTC**: Ambas APIs nos permiten hacer distíntas opciones multimedia, como pueden ser escuchar un audio, ver un vídeo o incluso, grabar el vídeo que se obtene desde la web cam. 


- Cita qué opción ofrece `CSS3` para conseguir que se apliquen diferentes estilos `CSS` sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).
  
  - CSS3 nos ofrece la opción de usar `MediaQueries` para ayudarnos a contruir páginas responsive.


- Cita al menos 4 de las características principales de `TypeScript`.
  - Las principales características de TypeScript son:
    - **Tipado de datos**: Podemos indicar que una variable va a ser de un tipo concreto. Ej: String, int, boolean...
    - **Orientación a Objetos**: Dispone de soporte para programación orientada a objetos, con clases, interfaces, herencia...
    - **Inferencia de datos:**: Puede determinar el tipo de datos en función de dónde se usa.
    - **Compatibilidad con JavaScript**: A pesar del tipado de datos, y la orientación a objetos, es compatible con código JavaScript.
    - **Compilado**: Al ser un código compilado, podemos detectar los errores antes de ejecutar el código.


### 2. El lenguaje `css` es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores `css`, que ofrecen evidentes ventajas.
- Cita al menos dos de estos preprocesadores.
  - SASS
  - LESS
  - Stylus
- Cita al menos 4 ventajas que ofrecen estos preprocesadores.
    - Permiten crear la estructuración de la aplicación web a un nivel de orden mayor.
    - Posibilidad de crear variables que pueden ser usadas, por ejemplo, para poner el mismo color a un elemento común de nuestra web.
    - Anida los estilos relativos a un elemento y selectores, pudiendo agruparlos para un mejor mantenimiento.
    - Creación de mixins, que son un conjunto de propiedades reutilizables.

- Explica brevemente en qué consisten los sourcemaps.
  - Ayuda al debug de ciertos elementos como los loaders y transformaciones, dado que el código que se genera en estos casos, difiere bastante al que el usuario programa. Cuando se utilizan sourcemaps se realiza un mapeo entre el código generado y el programado, y existe tanto para CSS como para JavaScript.

### 3. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos.
 - Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.
   -  Sistemas de control de versiones:
      -  GIT
      -  SourceSafe
   - Herramientas de gestión de módulos:
     - npm
     - yarn
 - Cita y explica al menos 3 comandos de `git`.
   - `git init`: Inicializa el repositorio en la ubicación que le indiquemos
   - `git add [nombre fichero]`: indica a git el documento citado - si ponemos un punto añade todos aquellos que tienen cambios -. que se prepare para añadir los cambios de dicho fichero (o ficheros) a la base de datos.
   - ` git commit -m "[comentario]"`: Confirmamos los cambios que hemos realizado en los ficheros que previamente hemos indicado a git, y le añade el comentario que hemos especificado.
   - `git checkout [nombre rama]`: Volvemos a la última versión confirmada de la rama especificada.
  
 - Cita y explica brevemente las características más definitorios de `WebPack`.
   - WebPack es una herramienta de construcción de módulos para aplicaciones web que se utiliza para empaquetar y compilar archivos JavaScript (modulos), así como para la gestión de dependecias, conversor de formatos, servidor de desarrollo, carga y uso de módulos...
   - También considera módulos a las imágenes, hojas de estilo, páginas HTML..., por lo que WebPack está considerado como un Task Runner muy especializado en el procesamiento de archivos de entrada para convertirlos en archivos de salida, para ello, utiliza unos componentes que se denominan *loaders*.

