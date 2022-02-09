¡No hay tests para esta challenge, crearemos una App!

### eCommerce Le Wagon

¡Ahora consolidarás todo lo aprendido de Ruby on Rails y React a lo largo de esta semana en este interesante proyecto eCommerce!

### 1. Setup

El proyecto integrará dos secciones distintas, alejándonos del modelo MVC (modelo vista-controlador) que ya conoces e incorporará un sistema de consultas API Rest entre las partes del proyecto; las muy llamadas Frontend y Backend.

Debes crear una carpeta llamada `ecommerce-le-wagon/` y dentro de ella:

### 1.1 Frontend

Debes crear una aplicación base con la ayuda de:

```
npx create-react-app frontend
```

Luego, en la carpeta `src/` crear la carpeta `components/`. Dentro de esta última carpeta debes colocar todos los componentes que irás creando a lo largo del proyecto.

Para poder visualizar lo que vamos creando y los cambios en tiempo real debemos lanzar un servidor con la ayuda de `npm start`.

No olvides crear el archivo `.env` para poder administrar las variables de entorno que usarás a la hora de hacer las consultas a tu servidor de Rails.

### 1.2 Backend

Dentro de la misma carpeta `ecommerce-le-wagon/`, a la altura de `frontend/`, debes correr el siguiente comando:

```
rails new \
  --database postgresql \
  -m https://raw.githubusercontent.com/lewagon/rails-templates/master/devise.rb \
  backend
```

Que creará un proyecto de Rails de nombre `backend` con una base de usuarios ya configurada.
Para poder tener tu servidor prendido y escuchando las peticiones de nuestro `frontend`, ayúdate de `rails serve`.

### 2. Guía

Crearás una aplicación de venta de productos online (¡de los productos que más te gusten!). Para ello debes preparar un seed en tu proyecto de Rails que te permita insertar varios productos en la tabla de Productos.

Las consideraciones generales son:

1. Debes manejar una tabla de Usuarios que guarde información de los clientes que usarán tu aplicación.
2. Para cada usuario debes almacenar las compras que ha realizado en tu aplicación.
3. Cada usuario tendrá una lista de productos favoritos a modo de wishlist, a la que podrá agregar o eliminar productos.
4. Para no perder la intención de compra de algún usuario, debes manejar un `Carrito de Compras` que almacenará la lista de productos que el usuario iba a comprar y no logró finalizar.
5. Para concretar la compra del `Carrito de Compras`, debes realizar una consulta al servidor y luego dejarla vacía.
6. Los productos deben verse en tu aplicación. Dejamos a tu decisión en mostrarlos en el home o crear una sección especial.
7. Cuando un usuario presione sobre algún producto podrá visitar la página particular de ese producto, en el que se mostrará más información del mismo.
8. Tanto en la lista general como en la página particular de algún producto, un usuario podrá seleccionar agregarlo al `Carrito de Compras`.
9. En cualquier parte de la aplicación debe colocarse un enlace que lleve al usuario al `Carrito de Compras` para concretar la compra de los productos seleccionados (sugerencia: poner un ícono en el navbar).

¡Crea los controladores y endpoints que consideres pertinentes para lograr el objetivo!

### 3. Opcional

Si te sobró el tiempo, puedes intentar creando un usuario administrador que pueda crear y eliminar productos nuevos en la aplicación. Además de la interfaz y formularios necesarios para lograrlo, este usuario deberá poder revisar los ingresos totales y mensuales por compras generadas a lo largo del tiempo.

### Solución

No hagas trampa! Trata de hacer lo máximo posible **por ti mismo** antes de ver el repositorio de la solución.

<details><summary>View solution</summary><p>

👉 Aquí el [repositorio de la solución](...).

</p></details>
