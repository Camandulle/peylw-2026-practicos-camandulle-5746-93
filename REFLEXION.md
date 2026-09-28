# Reflexión Aplicada - Laboratorio 2

## 1. Imagen y atributo alt

El nombre de la imagen que guardé en la carpeta `img/` es `pic.jpeg`. El valor del atributo `alt` que le asigné en `acercade.html` es: "Ilustración de perfil de Fernanda Camandulle".

## 2. Importancia de las etiquetas semánticas

Usar etiquetas semánticas como <main>, <nav> o <header> en lugar de <div> genéricos es importante por varias razones. Primero, por accesibilidad: los lectores de pantalla que usan las personas con discapacidad visual pueden identificar estas etiquetas y anunciar, por ejemplo, "esto es la navegación" o "esto es el contenido principal", lo cual mejora mucho la experiencia de navegación. Segundo, por SEO: los buscadores como Google entienden mejor la estructura de la página cuando usa etiquetas semánticas, y eso puede ayudar a posicionar mejor el sitio. Por último, mejora la legibilidad del código: si otro programador (o yo misma en el futuro) abre el archivo, es mucho más fácil entender qué hace cada parte con solo mirar el nombre de la etiqueta, en vez de tener que revisar clases o IDs dentro de un montón de <div> genéricos.

## 3. Verificación de rutas de navegación

Para verificar que los enlaces de la barra de navegación funcionaban correctamente en el entorno local, abrí el archivo index.html directamente en el navegador y fui haciendo clic en los links "Inicio" y "Acerca de" para confirmar que me llevaban a la página correspondiente en ambos sentidos. Una vez desplegado en GitHub Pages, repetí la misma prueba pero usando la URL pública del sitio, entrando primero a la página de inicio y clickeando los mismos enlaces, para confirmar que las rutas relativas (index.html y acercade.html) también funcionaran igual de bien en el entorno publicado, sin errores 404 ni links rotos.



# Reflexión Aplicada - TP3


## 1. Código HTML del campo Código Postal

```html
<input type="text" id="cp" name="cp" pattern="^[A-Z]\d{4}[A-Z]{3}$" title="Formato requerido: una letra mayúscula, 4 números y 3 letras mayúsculas. Ej: R8500AAF">
```

## 2. La etiqueta <label> y el atributo for

Qué hace <label>: Es el texto descriptivo que le dice al usuario qué información va en ese campo (ej: "Nombre:", "Email:"). Sin él, el usuario vería solo una cajita vacía sin saber qué escribir ahí.

Cómo se asocia con for: El atributo for del <label> tiene que tener exactamente el mismo valor que el id del <input> correspondiente.

Esto trae dos beneficios prácticos. El primero es que si el usuario hace clic en el texto del label (no directamente en el input), el foco salta igual al campo de entrada, como si hubiera clickeado el input mismo — lo pude comprobar haciendo clic en la palabra "Nombre:" de mi formulario. El segundo es de accesibilidad: los lectores de pantalla para personas con discapacidad visual anuncian el contenido del label cuando el usuario navega hasta ese campo, ayudándolo a saber qué información se espera ahí.


## 3. Radios con mismo name vs distinto name

Mismo name: Cuando varios radios comparten el mismo valor de name, el navegador los agrupa y los vuelve mutuamente excluyentes: solo uno puede estar marcado a la vez. Si el usuario hace clic en otra opción del mismo grupo, la que estaba marcada se desmarca automáticamente.

Distinto name: Si cada radio tuviera un name diferente, el navegador ya no los reconocería como parte de un mismo grupo. Cada uno se comportaría de forma independiente, y el usuario podría terminar marcando varios (o todos) al mismo tiempo — perdiendo justamente el propósito de "elegí una sola opción entre varias", que es la razón de ser del radio button.

Justamente por eso los checkboxes de Suscripción sí tienen todos el mismo name="suscripcion" pero eso NO los hace excluyentes — la exclusión es un comportamiento exclusivo de type="radio", no de compartir name en general.
