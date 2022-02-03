¡No hay tests para esta challenge, crearemos una App!

### App Random Persons

El objetivo es lograr construir una aplicación modularizada a través de componentes que representen secciones importantes.

![App Random Persons](public/random_users.png)

### 1. Setup

Para este challenge deben crear una aplicación base con la ayuda de:

`npx create-react-app nombre-proyecto-aqui`

Luego, dentro de la carpeta `src/` crear la carpeta `components/`. Dentro de esta última debemos colocar todos los componentes que iremos creando a lo largo del ejercicio.

Para poder visualizar lo que vamos creando y los cambios en tiempo real debemos lanzar un servidor con la ayuda de `npm start`.

### 2. Guía

La información que necesitan para llenar las cartas de personas la pueden crear ustedes mismos con información ficticia en un archivo `.json` que tenga una estructura similar a la siguiente:

```
[
    {
        "id": {
            "name": "TFN",
            "value": "385472524"
        },
        "gender": "female",
        "name": {
            "first": "Vivan",
            "last": "Lee"
        },
        "location": {
            "city": "Cairns",
            "state": "New South Wales",
            "country": "Australia",
        },
        "email": "vivan.lee@example.com",
        "dob": {
            "age": 25
        },
        "phone": "03-6494-9952",
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/73.jpg",
        },
    },
    {...}
]
```

Esta información fue extraída de `https://randomuser.me/`

El proyecto debe modularizar cada sección importante en componentes. Por ejemplo, debe existir un componente `Card.jsx` que sirva para renderizar varias personas (que no se repita, sino que se reutilize) o un componente `Header.jsx` que contenga todas las etiquetas y estilos que se pueden visualizar en el Navbar de la aplicación.
PD: La barra de búsqueda del navbar no tiene por qué funcionar.

### Solución

No hagas trampa! Trata de hacer lo máximo posible **por ti mismo** antes de ver el repositorio de la solución.

<details><summary>View solution</summary><p>

👉 Aquí el [repositorio de la solución](...).

</p></details>
