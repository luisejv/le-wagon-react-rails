# React Integration

Integraremos una API de Rails con nuestro frontend en React.
## Installation

Creamos un proyecto vacío de React con:

```bash
npx create-react-app my-app
```

## Fetch

Usaremos la API Fetch de Javascript para hacer todos nuestros request a la API de Rails. El método Fetch lleva como parámetros la URL a dónde queremos hacer la solicitud, y los requestOptions, que son una serie de atributos que permitirán saber a la API qué devolvernos.

La estructura de la API Fetch es:
```javascript
fetch(url, requestOptions)
.then(function() {

})
.catch(function() {

});
```

Donde, aparte de url y requestOptions, vemos dos palabras nuevas. 

Dentro de .then indicaremos quê hacer con la respuesta de nuestra API, como por ejemplo, setData(response).
Dentro de .catch indicaremos quê hacer en caso de que la respuesta por parte de la API sea un error, por ejemplo, setError(true).

### Tipo de query: requestOptions

El requestOptions, en el caso del GET tendrá la siguiente forma:

```javascript
var requestOptions = {
     method: 'GET',
     redirect: 'follow'
};
```

De igual forma, para un POST:

```javascript
method: 'POST',
redirect: 'follow',
headers: {
     "Content-Type": "application/json",
     'X-User-Email': <<your_user_email>>,
     'X-User-Token': <<your_user_token>>
},
body: JSON.stringify(body)
```

Siendo body, nuestra variable con todos los datos que queremos enviar, y tanto X-User-Email y X-User-Token los datos de la sesión que estamos utilizando. Estos datos es altamente recomendable colocarlos en un archivo de entorno, aunque en el común de los casos, serán proporcionados por algún reducer, que tendrá la información de la sesión que ha sido iniciada.

Con la misma estructura podemos armar un PATCH:

```javascript
method: 'PATCH',
redirect: 'follow',
headers: {
     "Content-Type": "application/json",
     'X-User-Email': <<your_user_email>>,
     'X-User-Token': <<your_user_token>>
},
body: JSON.stringify(body)
```

Y finalmente, DELETE:

```javascript
method: 'PATCH',
redirect: 'follow',
headers: {
     "Content-Type": "application/json",
     'X-User-Email': <<your_user_email>>,
     'X-User-Token': <<your_user_token>>
}
```

## Ejercicio

Teniendo todos estos datos en cuenta, se propone la consigna de generar una app de React.js, que utilice la [API de Restaurants](https://github.com/luisejv/le-wagon-react-rails/tree/main/React%20Integration%20API), que sea capaz de crear, mostrar, actualizar y eliminar (Create, Read, Update, Delete) restaurants de nuestra API. Siempre utilizando la estructura de Fetch en todos los casos.

Los restaurants se deberán mostrar en una tabla, con nombre y dirección. Para mostrar y editar puede utilizarse un modal, o una página aparte.

Los endpoints a utilizar son:

Para mostrar todos los restaurants:
```bash
GET /api/v1/restaurants  # unauthenticated
```

Para mostrar solo un restaurant, pasando como parámetro su id (obtenido claro, de la query anterior):
```bash
GET /api/v1/restaurants/:id # unauthenticated
```

Para crear un nuevo restaurant en la lista:
```bash
POST /api/v1/restaurants # authenticated
```

Para actualizar un restaurant, pasando como parámetro su id y en el body los datos a actualizar (para este caso, name y address):

```bash
PATCH /api/v1/restaurants/:id # authenticated
```

Finalmente, para eliminar un restaurant:

```bash
DELETE /api/v1/restaurants/:id # authenticated
```

## Puntos extra
Es muy importante, a la hora de hacer requests, adelantarnos a los posibles errores. La consigna extra es, como se explica en la clase, aplicar un manejo de errores a la hora de crear un nuevo restaurant. Deberá mostrarse un mensaje de error al usuario (alert, etc.) y una breve descripción del error que sucedió.
