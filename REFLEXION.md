# Reflexión Aplicada - Laboratorio 2

## 1. Imagen y atributo alt

El nombre de la imagen que guardé en la carpeta `img/` es `pic.jpeg`. El valor del atributo `alt` que le asigné en `acercade.html` es: "Ilustración de perfil de Fernanda Camandulle".

## 2. Importancia de las etiquetas semánticas

Usar etiquetas semánticas como <main>, <nav> o <header> en lugar de <div> genéricos es importante por varias razones. Primero, por accesibilidad: los lectores de pantalla que usan las personas con discapacidad visual pueden identificar estas etiquetas y anunciar, por ejemplo, "esto es la navegación" o "esto es el contenido principal", lo cual mejora mucho la experiencia de navegación. Segundo, por SEO: los buscadores como Google entienden mejor la estructura de la página cuando usa etiquetas semánticas, y eso puede ayudar a posicionar mejor el sitio. Por último, mejora la legibilidad del código: si otro programador (o yo misma en el futuro) abre el archivo, es mucho más fácil entender qué hace cada parte con solo mirar el nombre de la etiqueta, en vez de tener que revisar clases o IDs dentro de un montón de <div> genéricos.

## 3. Verificación de rutas de navegación

Para verificar que los enlaces de la barra de navegación funcionaban correctamente en el entorno local, abrí el archivo index.html directamente en el navegador y fui haciendo clic en los links "Inicio" y "Acerca de" para confirmar que me llevaban a la página correspondiente en ambos sentidos. Una vez desplegado en GitHub Pages, repetí la misma prueba pero usando la URL pública del sitio, entrando primero a la página de inicio y clickeando los mismos enlaces, para confirmar que las rutas relativas (index.html y acercade.html) también funcionaran igual de bien en el entorno publicado, sin errores 404 ni links rotos.