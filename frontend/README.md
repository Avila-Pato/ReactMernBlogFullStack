# Proyecto Frontend

Este proyecto es la parte frontend de una aplicación MERN web desarrollada con **React** y varias tecnologías relacionadas. A continuación, se describen las dependencias principales, las características del proyecto y cómo funciona el front...

## Descripción

El frontend de esta aplicación está construido utilizando **React**, **Vite**, y **Tailwind CSS**. Proporciona una experiencia de usuario interactiva con una interfaz limpia y moderna. Se utilizan varias bibliotecas para facilitar la gestión del estado, la autenticación, entre otros.

## Tecnologías utilizadas

### Librerías y Dependencias

1. **React**: El núcleo de la aplicación se construye utilizando React, una biblioteca de JavaScript para construir interfaces de usuario interactivas. Utilizamos la versión `^18.3.1` de React.

2. **Vite**: Para la construcción y la optimización del proyecto, utilizamos **Vite**, un bundler rápido que permite un desarrollo más eficiente. Vite facilita la recarga rápida durante el desarrollo y la optimización de archivos al hacer el build.

3. **Tailwind CSS**: Para el diseño y los estilos de la aplicación, empleamos **Tailwind CSS**. Esta es una herramienta de utilidades CSS que permite diseñar interfaces de manera rápida y modular sin escribir CSS personalizado. La versión utilizada es `^3.4.15`.

4. **Clerk React**: Se utiliza **Clerk** para la autenticación de usuarios. Clerk es una plataforma que facilita la gestión de usuarios, el inicio de sesión y las sesiones. La versión utilizada es `^5.17.0`.

5. **React Router DOM**: Para la navegación entre páginas dentro de la aplicación, utilizamos **React Router DOM**. Esta biblioteca permite gestionar las rutas de manera declarativa en una SPA (Single Page Application). Usamos la versión `^7.0.1`.

6. **Axios**: Para la realización de solicitudes HTTP al backend, utilizamos **Axios**, una biblioteca que facilita la comunicación con APIs. La versión utilizada es `^1.7.7`.

7. **React Toastify**: **React Toastify** es una biblioteca para mostrar notificaciones (toasts) en la aplicación. Estas notificaciones se usan para mostrar mensajes informativos o de error al usuario de forma no intrusiva. La versión utilizada es `^10.0.6`.

8. **React Query**: Utilizamos **React Query** para gestionar las solicitudes a APIs y el manejo del estado remoto. Esto facilita la sincronización de datos con el servidor y optimiza las peticiones y la gestión de caché. La versión utilizada es `^5.61.3`.

9. **ImageKit React**: Para la carga y manipulación de imágenes en la nube, utilizamos **ImageKit**, que permite subir y transformar imágenes de forma eficiente. La versión utilizada es `^4.2.0`.

10. **PostCSS**: Utilizamos **PostCSS** para optimizar los estilos CSS, como la automatización de prefijos para compatibilidad con diferentes navegadores. La versión utilizada es `^8.4.49`.

11. **Timeago.js**: Se utiliza **Timeago.js** para mostrar tiempos relativos de manera amigable, como "Hace 5 días". La versión utilizada es `^4.0.2`.

### Herramientas de Desarrollo

- **Vite**: Utilizado para la creación y optimización de la aplicación durante el desarrollo y la construcción para producción. La versión utilizada es `^5.4.10`.
- **ESLint**: Para mantener un código limpio y libre de errores, se usa **ESLint** con varios plugins específicos para React y React Hooks. Esto ayuda a seguir buenas prácticas y estándares de código.
- **Prettier**: A través de la integración con ESLint, también utilizamos Prettier para el formateo automático del código y garantizar la consistencia en el estilo del código.

## Lógica de la Aplicación

La aplicación se organiza en una estructura basada en componentes de React. Cada componente tiene una funcionalidad independiente que se encarga de renderizar una parte de la interfaz de usuario. Algunos de los flujos clave incluyen:

1. **Autenticación de Usuario**:
   - La autenticación se maneja mediante Clerk React, que se encarga de gestionar las sesiones y el inicio de sesión de los usuarios.
   - El frontend se comunica con Clerk para verificar la autenticación y gestionar la sesión del usuario.

2. **Navegación**:
   - La navegación entre diferentes vistas o páginas de la aplicación se maneja mediante **React Router DOM**. Se definen rutas para las diferentes secciones de la aplicación, y se actualiza el contenido sin recargar la página.

3. **Solicitudes HTTP**:
   - Las solicitudes HTTP se manejan mediante **Axios** y **React Query**. Axios se utiliza para hacer peticiones a las APIs backend, mientras que React Query facilita la gestión de datos, cacheo y sincronización con el servidor.

4. **Gestión de Estados**:
   - React Query también se encarga de la gestión de estados relacionados con datos remotos, mientras que **React Context** o **useState** se utilizan para manejar estados locales dentro de la aplicación.

5. **Notificaciones**:
   - Se utiliza **React Toastify** para mostrar notificaciones a los usuarios. Estas pueden ser de diferentes tipos, como éxito, error o información.

6. **Estilos Responsivos**:
   - Gracias a **Tailwind CSS**, la interfaz de usuario es totalmente responsiva y se adapta a diferentes tamaños de pantalla. Las clases de Tailwind permiten diseñar componentes y estructuras de manera rápida y efectiva sin la necesidad de escribir mucho CSS personalizado.

## Scripts

- **`dev`**: Inicia el servidor de desarrollo con Vite (`vite`).
- **`build`**: Crea una versión optimizada de la aplicación para producción (`vite build`).
- **`lint`**: Ejecuta ESLint para verificar el código y las buenas prácticas (`eslint .`).
- **`preview`**: Muestra una vista previa de la aplicación optimizada en un entorno de producción local (`vite preview`).

## Instalación

1. Clona el repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
