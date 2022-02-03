¡No hay tests para esta challenge, crearemos una App!

### Giphy Search App

El objetivo de este challenge es recrear la aplicación de búsqueda de Giphs `Giphy Search App`.

![Homer thinking](https://raw.githubusercontent.com/lewagon/react-redux-images/master/react/homer_thinking.png)

#### 1. Setup

Para este challenge, comenzaremos desde una [plantilla](https://github.com/lewagon/react-boilerplate):

```
cd ~/code/<github_username>

# Clona la plantilla en un nuevo proyecto `react-gifs` (o cualquier otro nombre)
git clone git@github.com:lewagon/react-boilerplate.git react-gifs
cd react-gifs
yarn install

# Borra la historia de Git del repositorio clonado e inicia una nueva
rm -rf .git
git init
git add .
git commit -m "Start new project from lewagon/react-boilerplate"

# Crea un reposito de GitHub, y haz push!
hub create
git push origin master

# Hora de abrir tu editor y codear!.
code .
```

Lanza el servidor con el comando `npm start` y éste abrirá una página en el puerto `http://localhost:3000`!

#### 2. Features

1. Cuando el usuario escribe una búsqueda, la lista de Gifs debe mostrar los primeros 10 resultados que la `Giphy API` retorna.
1. Cuando el usuario da click a un gif de la lista, debe aparecer en la zona principal de la izquierda.
1. (Opcional) Cuando el usuario hace focus o quita el focus del input, busca una buena manera de cambiar el UI de la parte izquierda (opacity, background-color, border...) para mostrarle al usuario que está fuera del input!

#### 3. Guía

- Primero, identifica los componentes que necesitas en tu App.
- Luego, piensa qué data compartirán y qué diseño tendrán sus `props` / `state`.
- Por último, agrega eventos y callbacks.

#### 4. Estilos

No queremos que pierdas mucho tiempo en CSS el día de hoy, así que puedes obtener los estilos de [este gist](https://gist.github.com/ssaunier/dbf2b76987ec62258d7ad51f0162a0ed)

### Solución

No hagas trampa! Trata de hacer lo máximo posible **por ti mismo** antes de ver el repositorio de la solución.

<details><summary>View solution</summary><p>

👉 Here's [a live example](https://lewagon.github.io/react-giphy/) of the [solution repository](https://github.com/lewagon/react-giphy).

</p></details>
