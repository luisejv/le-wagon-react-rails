
## Arrancamos creando la app con create-react-app y llamandola todo

### `npx create-react-app routes-app`

## Ahora arrancamos el servidor

### `npm start`

abrimos [http://localhost:3000](http://localhost:3000) para verlo en el browser

## Una vez iniciado el servidor:
Vamos a poder renderizar los cambios

Antes que nada, eliminamos todos los archivos que esten en la carpeta `src`, excepto `index.js` y `app.js`. 
Ingresamos en **index** y lo dejamos asi:

 ``` javascript
 //index.jsx
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

```
y en **App** para dejarlo asi:

 ``` javascript
 //App.jsx
function App() {

  return (
    <div>
    </div>
   )
}
 
export default App;
```

Ahora ingresamos en `src` creamos una carpeta llamada components y en ella, generamos 3 componentes nuevos, similares a nuestra ultima homework

> Todo.jsx

 ``` javascript
export default function Todo({todo}) {
    return (
        <div>
            <h1>
            {todo.title}
            </h1>
            <p>
            {todo.description}
            </p>
            <button> DONE </button>
        </div>
    )
}
```
> TodoList.jsx

 ``` javascript
import Todo from './Todo'
import TodoForm from "./TodoForm"

export default function TodoList() {
    return (
        <div>
          <h2> TODO LIST</h2>
            { todos.map((todo) => ( 
                  <Todo todo={} key={} /> 
          )) }
          <button>Reset All</button>
          <TodoForm />
        </div>
    )
}
```
> TodoForm.jsx

```javascript
import { useState } from 'react'

const initialFormValue = {
    title: "",
    description: "",
  };

export default function TodoForm() {    
    const [ formValue, setFormValue ] = useState(initialFormValue)
    const { title, description } = formValue;

    const handleInputChange = (e) => {
        const changedFormValues = {
          ...formValue,
          [e.target.name]: e.target.value,
        };
        setFormValue(changedFormValues);
      };

    const handleSubmit = (e) => {
          e.preventDefault();
          const newTodo = {
            id: Date.now(),
            ...formValue,
            completed: false,
          };
          setFormValue(initialFormValue);
      };

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Titulo" 
            name="title" value={title}
            onChange={handleInputChange}/>
            <textarea placeholder="Descripcion" 
            name="description"  value={description}
            onChange={handleInputChange}>
           </textarea>
           <button > agregar </button>
          </form>
        </div>
    )
}
```

Ahora que tenemos nuestros componentes y nuestro componente principal `App` conectado con `index`, vamos a generar las rutas dentro de el:

Primero, vamos a crear las *vistas*, que seran renderizadas segun la ruta que determinemos posteriormente. Para ello, generamos dentro de la carpeta `src` una carpeta nueva llamada `views` y dentro de ella, los documentos que utilizaremos para cada vista. en este ejercicio son los siguientes:

> About.jsx , Error.jsx , LandingPage.jsx , User.jsx

De momento, en cada una renderizaremos **unicamente** un texto para poder identificarlas. Por ejemplo `About.jsx` queria asi

 ``` javascript
 //About.jsx
function About() {

  return (
    <div>
    <h1>About</h1>
    </div>
   )
}
 
export default About;
```
Repetimos lo mismo en cada una de las vistas recien creadas, y procedemos a hacer uso de ellas en `App` que sera el componente donde gestionaremos todas las rutas.

Importamos las vistas que tenemos:

 ``` javascript
 //App.jsx
import About from "./views/About";
import LandingPage from "./views/LandingPage";
import User from "./views/User";
import Error from "./views/Error"
```
ahora que tenemos todas las vistas importadas, procedemos a importar desde **"react-router-dom"** todo lo necesario para gestionar las rutas, que seria:

 ``` javascript
 //App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

## Ahora podemos configurar las rutas

Para ello nos dirijimos al return que tenemos en `App` para modificar el area de renderizado

1. Envolvemos todo el return de `App` con `</BrowserRouter>`
2. Envolvemos todas las rutas que queremos conectar con `<Routes />`
3. Y Finalmente hacemos uso de Route para cada ruta en particular, pasandole en su **prop** el *path* que le queremos asignar y el **elemento** (*Componente* o en este caso *vista*) **conectado** a este de la siguiente manera:

 ``` javascript
 //App.jsx
  return (
    <div> 
      <BrowserRouter>
        <Routes>
            <Route path="/about" element= {<About/>} />         
        </Routes>
      </BrowserRouter>
     </div>
  );
```
asignandole a:

- `LandingPage` el *path* *"/"*
- `User` el *path* *"/user"*
- `Error` el *path* *"*"*

*en el caso de `Error` te conviene utilizar * para que sea la ruta por default cuando el path no coincida con ninguno de los que configuramos*

## Ahora vamos a brindarle un estado GLOBAL a `App`

Para ello haremos uso del **HOOK** *useContext* :

1. creamos dentro de `src` otra carpeta llamada `store` donde gestionaremos el estado global de la misma
2. creamos dentro de la carpeta `store`, 2 archivos distintos
>  StoreProvider.js  
 storeReducer.js 

y procedemos a editar el dcoumento `StoreProvider`.
En el tenemos que importar *createContext()* y *useReducer()* de **"react"**

 ``` javascript
 //StoreProvider.js
 import { createContext, useReducer} from "react";
 ```
y hacemos uso de ellos de la siguiente manera. 
> *createContext()* es almacenada en `StoreContext` 
 
``` javascript
const StoreContext = createContext();
```
Y declaramos el componente `StoreProvider`.
Una funcion que como parametros recibe a en sus **props** via *destructuring* a sus **children** y a su ves, los devuelve envueltos por el componente `StoreContext` con su propiedad `Provider` quedando asi:

``` javascript
const StoreProvider = ({ children }) => {
    return (
        <StoreContext.Provider>
            {children}
        </StoreContext.Provider>
    )
}
```
Sera la funcion principal en este documento por ello la exportamos por **default**
``` javascript
export default StoreProvider;
```
Momento de hacer uso de:
> *useReducer()* que nos permite hacer uso del **store** o *estado global*, para su declaracion inicial y su acciones o funciones modificadoras

Pero, para ello, debemos editar nuestro documento `storeReducer.js`. Una ves en el, declaramos nuestro **store** inicial llamandolo `initialStore` y sera un objeto para asi poder asignarle distintos atributos y poder acceder a ellos facilmente via *dot notacion*. 
Cada atributo son nuestros distintos **estados globales** que tenemos almacenados en el **store**

```javascript
//storeReducer.js
const initialStore = {
    todos: [
        {
          id: 1,
          title: "Terminar el homework",
          description: "Debo completar la homework de hoy",
          completed: false,
        },
        {
          id: 2,
          title: "Repasar useState y useEffect",
          description: "Son los hooks mas utilizados, conviene practicarlos haciendo ejercicios",
          completed: false,
        },
      ]
}
```
3. En este mismo documento, vamos a crear y editar nuestro `storeReducer`, que sera la funcion encargada de recibir el **estado** y *filtrar* entre las distintas **acciones**, para poder decidir que hacer como resultado de esa operacion

*Aca es donde poder agragar acciones como eliminar, agregar, verificar, etc y manejar la logica relacionada a ellas*

Arrancamos, declarando un *objeto* que contenga los distintos **tipos** de acciones que vamos a utilizar, en este caso seran 2, agregar y resetear:

```javascript
//storeReducer.js
const types = {
    todoAdd:"TODO_ADD",
    todoReset:"TODO_RESET",
}
```
Para hacer uso de ellas en nuestra nueva funcion `storeReducer`, donde a traves de switch, vamos a ir comparando la accion que recibimos a traves del **dispatch** *que acompana al evento modificador del estado* con las distintas alternativas que vamos a controlar en cada caso, por ejemplo, en el caso de `todoAdd`, podria quedar asi: 

```javascript
const storeReducer = ( state, action ) => {
    switch(action.type) {
      case types.todoAdd: 
        return {
          ...state, todos: [...state.todos, action.payload ]
              };
        default:
            return state
    }

}
```
*No te olvides de agregar el caso por **default** donde devolvemos el estado exactamente como nos llego si no coincide con ningun caso de los anteriores*

de esta forma, cuando la funcion recibe la accion `todoAdd()`, sabe que debe devolver el estado como le llego, con la modificacion de su atributo `todos`, ya que este pasara a ser, lo que ya tenia antes y agregandole el **payload** o paquete que le llego junto con la accion.

*Algunas acciones incluyen **payload** para asi poder adjuntar informacion necesario para ejecutar esa accion, en este caso el payload que acompanaria la accion, traeria la informacion de la tarea agregada como su `title` o `description`*

Si quisieramos resetear las tareas, hariamos algo similar, con la diferencia que al devolver el estado, modficariamos el atributo `todos` para que contenga un *Array* vacio quedando asi:

```javascript

  case types.todoReset: 
        return {
            ...state, todos: []
        }
```
Terminado el reducer, podemos exportarlo por **default**, y exportamos tambien un *objeto* para desestrcturar, que contenga el *estado global inicial* y los distintos *tipos de acciones* para poder usarlos enm otros componentes de la app

```javascript
export { initialStore, types }
export default storeReducer
```
4. Con nuestro **reducer** completo, pasamos a hacer uso de el, declarando el `store` dentro de nuestro `StoreProvider`. 

En `StoreProvider` importamos el `storeReducer` y el `initialStore` de `storeReducer.js`

```javascript
//StoreProvider.js
import storeReducer, { initialStore } from "./storeReducer";
```

Una ves importados, haremos uso del **HOOK** `useReducer()` para llamar al estado global **store**, a sus funciones modificadoras las almacenaremos en la variable **dispatch** , y le pasamos como parametros a `usereducer()` el `storeReducer` y nuestro `initialStore` quedando asi:

```javascript
const [ store, dispatch ] = useReducer(storeReducer, initialStore)
```
Finalmente podemos conectar el store y el dispatch, con el provider que encierra toda nuestra app para asi poder utilizar el store en el componente que querramos, tan solo importandolo. 

Esto se logra, pasandole `<StoreContext.provider>` la prop **value** con nuestro *store* y su *dispatch*

```javascript
 <StoreContext.Provider value={[ store, dispatch ]}>
            {children}
        </StoreContext.Provider>
```
Ahora ya podemos importarlo y hacer uso de el en cualquier componente children del provider

## Haremos uso del estado GLOBAL y sus acciones

Ingresando en el componente `TodoList` podemos ver que existe una variable llamada `todos` todavia no declarada, estos `todos` seran los mismos que tenemos en nuestro estado global gracias a *useContext()*

Para ello, en el cuerpo de `TodoList` vamos a hacer uso de este **HOOK**, haciendo *destructuring* del **store** y el **dispatch** y pasandole como parametro a `StoreContext` de la siguiente manera:

```javascript
//TodoList.jsx
  const [ store, dispatch ] = useContext(StoreContext)
```
Ahora, ya contamos con el estado global en nuestro componente, estan conectados y asi podemos hacer uso de todas sus propiedades y acciones, como el estado global `todos` o la accion `todoReset()` que declaramos en el `storeReducer`

Con el store, procedemos hacer *destructuring* de el para obtener `todos` y operar con ellos

```javascript
  const { todos } = store
```
Ahora que ya contamos con el estado global `todos`, podemos maperlo para enviarle por **props** a `Todo` cada tarea en particular

```javascript
  { todos.map((todo) => ( 
        <Todo todo={todo} key={todo.id} /> 
          )) }
```
Y podemos hacer uso del dispatch tambien. En este caso para resetear la lista de tareas. Primero tenemos que importar `types` del `storeReducer` asi podemos enviar la accion `todoReset()` a traves del dispatch, una ves que el usuario haga click en el botton.

```javascript
import { types } from '../store/storeReducer'
```
Una ves importado, hacemos uso de el creando una funcion para controlar el click donde enviaremos el dispatch

```javascript

 const handleReset = ()=>{
        dispatch({ type: types.todoReset })
    }
```
Para finalmente agregar esta funcion al evento *onClick* del `<button>` Reset all

```javascript
  <button onClick={handleReset} >
           Reset All
  </button>
```
Hemos conectado el estado y las acciones de este componente, pasamos a `TodoForm` para ctambien hacer uso de *useContext*, pero en este caso para utilizar unicamente del **dispatch** al enviar la accion `todoAdd()` con la nueva tarea a traves de **payload**. Primero importamos `types`, `StoreContext` y `useContext`

```javascript
import { useContext } from 'react'
import { StoreContext } from '../store/StoreProvider';
import { types } from '../store/storeReducer';
```
Hacemos uso de *useContext()*
*este hook devuelve un Array, por lo que para el destructuring es necesario siempre extraer todas sus propiedades con su correcto orden por mas de que no vallan a ser utilizadas, como store en este caso*

```javascript
  const [ store, dispatch ] = useContext(StoreContext) 
```
Ahora que tenemos el dispatch, podemos enviarle la accion a traves de la funcion controladora del *submit*

```javascript
  const handleSubmit = (e) => {
      e.preventDefault();
         const newTodo = {
            id: Date.now(),
            ...formValue,
            completed: false,
          };

        dispatch({ 
            type: types.todoAdd, 
            payload : newTodo
        })
          setFormValue(initialFormValue);
      };
```
Ahora que terminamos con el estado global

## vamos a generar un estado local en cada tarea para saber si ya fue realizada

Para ello ingresamos en `Todo` y en su cuerpo hacemos uso de *useState()*
Primero la importamos

```javascript
//Todo.jsx
import { useState}from 'react'
```
Declarando el estado local como `done`, su funcion modificadora como `setDone` y como estado inicial `false`

```javascript
  const [ done, setDone ] = useState(false)
```
Y ahora haremos uso de el de 2 maneras 

> Controlamos el *Click* nen el el `<button>` *DONE* haciendo que modifique el estado, a lo contrario del estado actual, cada ves que se hace click

> Generamos un *renderizado condicional* para el `<button>` *DONE*, modificando sus estilos segun el estado de `done` ( true o false ). Al ser un *bboleano* el estado, podemor utilizar el operador ternario para manejar esa condicional 

de la siguiente manera:

```javascript
    <button 
            onClick={()=>setDone(!done)} 
            style={ { background : done ? "green":"salmon"}}
      > DONE </button>
```

Ahora nuestra App cuenta con un *estado global* **store** que contiene `todos` y un *estado local* en el componente `Todo` llamado `done`

## Ahora agregamos el componente `TodoList` a una nueva ruta

El path de esta sera *"/TodoList"*, y para ello, vamos a nuestro componente principal `App` y en el, importamos el componente `TodoList` y hacemos uso  de el declarando la ruta nueva :

```javascript
    <Route path="list" element={ <TodoList /> }/>
```
## vamos a hacer uso de los params en la ruta user, 
enviandole nuestro nombre de usuario para poder operar con el.

1. agregamos en el *path* de la ruta User, la variable :username quedando asi: 

```javascript
<Route path="user/:username" element={ <User/> }/>
```

2. ingresamos en la vista `User` e importamos `useParams` de `"react-router"`, para hacer uso de ellos en el cuerpo de user primero extrayendo a params, para despues extraer la variable en particular en este caso *username*

```javascript
// User.jsx
    const params = useParams();
    const username = params.username
```
ahora que ya tenemos la el valor de username,podemos hacer uso de el devolviendolo en pantalla 

```javascript
// User.jsx
     return (<div>
      <h1> soy {username}</h1>
  </div>);
```
Ahora vamos a generar un componente nuevo `GoHome` que nos permita regresar a nuestra `LandingPage` desde cualquier ruta

Primero, ingresamos en la carpeta `src/components` y generamos el componente nuevo `GoHome`, el cual devolvera un `<button>` con el texto 'GO HOME'.

```javascript
// GoHome.jsx
export default function GoHome() {
  return (
  <div>
     <button>Go Home</button>
  </div>);
}
```
En su cuerpo hacemos uso del **HOOK** `useNavigate`, importandolo y almacenandolo en una variable nueva llamada navigate
```javascript
// GoHome.jsx
const navigate = useNavigate()
```
Ahora que contamos con `navigate`, vamos a controlar el button para que este nos permita navegar directamente a nuestra `LandingPage`. Primero editamos nuestro button para agregarle la propiedad `onClick` pasandole como valor, la funcion `handleGoHome` 

```javascript
<button onClick={handleGoHome}>Go Home</button>
```

Ahora pasamos a declararla en el cuerpo de `GoHome`, dentro de ella, hacemos uso de `navigate` pasandole como parametro el *path* de destino que deseamos, en este caso sera *`/`*

```javascript
 const handleGoHome = ()=> {
        navigate("/")
    }
```
Ahora tenemos que configurar las rutas nuevamente, para que el componente `GoHome` **envuelva** a todas las rutas asi podemos ver el boton siempre.
 Para ello ingresamos en `App` y editamos las rutas, teniendo en cuenta que los *paths* de las rutas **internes** de `GoHome`, van a cambiar. al ser "/" el path de la ruta que los envuelve, las rutas internas por default continuan con "/" y agregan el valor que le asignemos quedando asi: 

```javascript
<Routes>
   <Route path="/" element={ <GoHome /> }>
      
        <Route path="list" element={ <TodoList /> }/>
        <Route path="user/:username" element={ <User/> }/>
        <Route path="about" element={ <About/> }/>  
        <Route path="*" element={<Error />} />
    </Route>
</Routes>
``` 
En el caso de `LandingPage`, al coincidir con el path "/" y ser su ruta interna, se la define como index asi:

```javascript
  <Route index element={ <LandingPage/> }/>
``` 
Momento de **volver** al componente `GoHome` para hacer uso de `Outlet`. una propiedad de "react-router" que nos permitira ubicar en pantalla al componente `GoHome`con relacion a sus rutas internas.

Ingresamos en `GoHome`, importamos `Outlet` y hacemos uso de el en el return del componente, en vuelto por una etiqueta `<section>` quedando asi:

```javascript
  <section>
       <Outlet />
    </section>
``` 
Ubicandolo en la parte superior o inferior de nuestro `<button>` segun querramos.

## Ahora puedes aprovechar para darle los estilos que quieras a cada vista !

Puedes utilizar las propiedades que ya conoces de `css`. para ello generas un documento nuevo, en la misma carpeta que el componente que vas a editar, y su mismo nombre, solo que le agregamos module.css al nombre del archivo, para despues importarlo en el componente y pasarle la propiedad `className` con el valor de `styles` y la variable que deseas darle de nombre, quedando asi: 

```javascript
//GoHome.jsx
import styles from "./goHome.module.css"
....

<button className={styles.botton}
onClick={handleGoHome} >Go Home </button>
```
y te dejamos un ejemplo de como podria ser su module.css

```javascript
//goHome.module.css
.botton {
    background-color:rgb(255, 136, 0);
    height:100px; 
    width:360px;
    border-radius: 20px;
    font-size:xx-large;
    color: rgb(255, 255, 255);
    box-shadow: 0 0 20px rgb(63, 62, 56), 0 0 20px rgb(73, 47, 18);
    padding: 1vh;
}

.buttonLanding:hover{
    box-shadow: 0 0 20px rgb(177, 72, 11);
    padding:5px;
    font-size: 5vh;
}

```

## Extra point 

Genera un componente nuevo llamado `NavBar`, que contenga los links directos para cada ruta que hemos creado. Podemos hacer uso de `Link` o `Navlink`
