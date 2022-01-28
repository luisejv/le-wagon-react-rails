
## Arrancamos creando la app con create-react-app y llamandola todo

### `npx create-react-app todo`

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

Dentro de la carpeta `src` creamos una carpeta nueva llamada  `componentes` y en su interior

 **Generamos 3 componentes distintos** llamados 

 `Todo.jsx` donde almacenaremos cada una de las tarea a realizar, por **individual** ,
 `TodoForm.jsx` donde generaremos el formulario respectivo para crear una tarea nueva ,
 `TodoList.jsx` donde renderizaremos la **Lista** de todos los `Todo` individuales existentes

 Para ello, ingresamos a `TodoList`, importamos `Todo.jsx` y hacemos uso del mismo, en el area de renderizado ( entre las etiquetas **html** que envuelven el **return** del componente `TodoList` )
 
 Ahora, ingresamos al componente principal llamado `App` e importamos `TodoList` y `TodoForm`
 Hacemos uso de ellos en el return de `App`

## Una vez conectados todos los componentes, procedemos a editarlos
 
 En el componente `TodoForm` creamos la etiqueta `<form>` con sus children `<input>` `<textarea>` y un `<button>` para poder controlar el submit del **formulario**
 
## Crear la lista de tareas inicial

 Vamos a crear un *Array* con la lista de tareas iniciales, la cual renderizaremos a modo de *Mapeo* en el componente `TodoList`. 
 
 Para ello, ingresamos en el componente ppal `App`, ya que este, al estar conectado con todos los componentes o sus componentes padres podra administrar el estado del *Array* : *lista de tareas* y de esta forma, poder renderizar los cambios al agregar o eliminar tareas

 Declaramos la constante afuera del componente:

 ``` javascript
 //App.jsx
> const initialTodos = [
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
    completed: true,
  },
];
```
**Procedemos a brindarle un estado para poder modificarla y ver los cambios en pantalla**

Para ellos, hacemos uso del **HOOK** *useState()* 
Declaramos el nombre de la variable contenedora del estado, como *todos* , su funcion modificadora como *setTodos* y declaramos a *initialTodos* como su estado inicial (parametro de useState())

 ``` javascript
 //App.jsx
> const [ todos, setTodos] = useState(initialTodos);
```

## Una ves declarado el estado, lo pasamos a los **children** que van a conectarse con el, a traves de las **props**

En este caso, `TodoList` 

``` javascript
//App.jsx
> <TodoList todos={todos} />
```
Ahora ingresamos al componente `TodoList`, recibimos las **prop** a traves de los **parametros**, aprovechamos para hacer *destructuring* y extraemos la propiedad *todos* de las *props* y hacemos uos de la misma en el return del componente `TodoList`. Realizando un mapeo del *Array* : *lista de tareas* y devolviendo, con cada *tarea*, el subcomponente `Todo`. A quien, a su ves, vamos a enviarle cada *tarea individual* via **props** a su subcomponente `Todo`

``` javascript
//TodoList.jsx
> function TodoList({todos}) {  
    
   return ( <>
      { todos.map( (todo) => (
          <Todo todo={todo} key={todo.id}/> ))
       }  
    </> )
 }
```
*No te olvides de agregar la propiedad *key* con un **identificativo unico**, ya que **React** lo solicita para cada *mapeo* o *lista* que se va a renderizar en pantalla*

Ahora podemos ingresar al componente `Todo.jsx` para recibir via **props** los detalles de cada tarea perteneciente al *Array* del *estado* `todos`. Hacemos destructuring de las *props* y extraemos `todo` que contiene cada tarea individual, la cual es un *objeto* que incluye sus propiedades ( *id, tilte, description, completed* ). 

``` javascript
//Todo.jsx
>   function Todo({ todo }) { ... }
```

En este caso vamos a hacer uso unicamente de *title* y *description* renderizandolos en pantalla. Para poder hacer uso de ellas, hay que extraerlas del *objeto* `todo` lo que podemos realizar de distintas maneras. En este ejemplo lo haremos a traves de la dot notacion

``` javascript
//Todo.jsx
>     return (
        <>
            <h1>{ todo.title }</h1>
            <p>{ todo.description }</p>
        </>
    )
```
Ahora que ya tenemos los componentes y el estado de las tareas conectados...

## Vamos a completar la parte logica del componente `TodoForm` asi podemos ir agregando tareas al estado `todos`

Primero, vamos a necesitar una funcion llamada `todoAdd()` la cual nos permitira ir agregando tareas al estado `todos`. Esta funcion debe ser declarada en el componente padre, donde se encuentra nuestro estado inicial, y despues ser enviada a `TodoForm` a traves de las **props**.
Esta debera tomar los datos ingresados en `<input>` y en `<textarea>` para agregarlos a un **nuevo Todo** junto con sus 2 propiedades restantes, las cuales tendran los siguientes valores:

``` javascript
{   ... , 
    id: Date.now(),
    completed: false,
}
```
Declaramos `todoAdd()`:

``` javascript
//App.jsx
> const todoAdd = (todo) => {

    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false,

    };
```
Lo enviamos a `TodoForm` a traves de las **props**

``` javascript
//App.jsx
> <TodoForm  todoAdd={todoAdd} />
```
Y finalmente lo recibimos via *destrcturing* en las **props** de `TodoForm`

``` javascript
//TodoForm.jsx
>function TodoForm({todoAdd}) { ... } 
```
Ahora ya estamos en el componente donde vamos a hacer uso de la funcion!

## En este caso al ser un form, primero vamos a obtener la data ingresada en los *inputs* para despues poder enviarla via *submit* a la funcion `todoAdd()`

Para ello, primero que nada vamos a generar un **estado local** quien va a contener la informacion del formulario, el cual en su estado inicial contara unicamente con 2 atributos vacios ( *title* y *description*) los cuales vamos a llenar con la info que ingresara en los *inputs*

``` javascript
//TodoForm.jsx
> const initialFormValue = {
    title: "",
    description: "",
  };
```
Declaramos este **estado local** como *formValues*, su funcion modificadora como *setFormValues* y su estado inicial como *initialFormValues*

``` javascript
//TodoForm.jsx
> function TodoForm({todoAdd}) {
    
    const [ formValue, setFormValue ] = useState(initialFormValue)

   return (

   )
}
```
Ya que `formvalue` es un *objeto* con 2 atributos ( *title* y *description*) , podemos aprovechar para hacer *destructuring* de ellos

``` javascript
//TodoForm.jsx
>  const { title, description } = formValue;  
```
Ahora vamos a declarar una funcion donde controlaremos lo que ingrese el usuario a traves de los *inputs* llamandola `handleInputChange(e)`, y en su interior, vamos a:
Declarar una constante nueva llamadola `changedFormValues` ya que en ella almacenaremos el valor de `<input>` y `<textarea>`.

``` javascript
//TodoForm.jsx
> const handleInputChange = (e) => {
        const changedFormValues = {
        };
      };
```

Para almacenarlos con el nombre y valor respectivo vamos a usar el *spread operator* para asi tomar lo que tenemos actualmente en `formValue` y modificar el atributo que coincida con el **nombre** del target de *input* y de *textarea* (`<input name="title">`,`<textarea name="description" >`) que lo recibimos del **evento** (e.target), y le asignamos el valor del target del mismo (`<input name={title}>`,`<textarea name={description} >`)

``` javascript
> const changedFormValues = {
          ...formValue,
          [e.target.name]: e.target.value,
        };
```
Para finalmente ejecutar la funcion `setFormValue()` pasandole como parametro la nueva constante `changedFormValues`

``` javascript
  setFormValue(changedFormValues);
```
Una ves terminada la funcion `handleInputChange(e)` y controlados los *inputs*, pasaremos a generar la funcion controladora del *submit* `handleSubmit(e)` la cual se encargara de hacer uso de la funcion `todoAdd` que hemos heredado a traves de las *props* de este componente, pasandole como parametro a `formValue`, para que asi, el estado `todos` se actualice y la tarea agregada desde `todoForm` genere la re-renderizacion del componente `TodoList` con la tarea agregada

``` javascript
>  const handleSubmit = (e) => {
          todoAdd(formValue);
      };
```
*no olvides agregar `e.preventDefault()` para evitar el comportamiento por default de submit*
``` javascript
  e.preventDefault();
      };
```
*tampoco te olvides de resetear el valor de `formValue` para que se vuelvan a vaciar los *inputs* una ves que `todos` a sido actualizado*
``` javascript
  setFormValue(initialFormValue);
      };
```
Ahora que tenemos la logica del componente `TodoForm` realizada, vamos a hacer uso de ella y terminar de editar el render que devolvemos

``` javascript
//TodoForm.jsx
 return ( <div>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Titulo" name="title" value={title} onChange={handleInputChange}/>
            <textarea placeholder="Descripcion" name="description" value={description} onChange={handleInputChange}></textarea>
            <button > agregar </button>
            </form>
        </div> )
```
## Extra point

Ahora que ya podemos ir agregando tareas nuevas, estaria bueno tener alguna forma de eliminarlas!
*te recomendamos agregarlo en el componente `Todo` asi se elimina la tarea en particular y no todas las existentes*

Para ello:
Primero, declara una funcion nueva en el componente ppal `App.jsx` llamada `todoDelete()` que, recibiendo por parametros el `todoId`, genere una constante nueva llamada `changedTodos` donde *filtrar* todos los `todos` que sean distintos del `todoId` recibido 
Por ultimo, utilizamos la funcion `setTodos` para modificar el estado `todos` con el resultado de `changedTodos`

``` javascript
  const todoDelete = (todoId) => {

    const changedTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos(changedTodos);
  };
```
Una ves creada la funcion, la enviamos a traves de las *props* hasta el componente `Todo.jsx` donde sera utilizada
En `Todo` la recibimos y hacemos *destructuring* de ella
Agregamos en el render de `Todo` el `<button>` para **eliminar** una tarea y para controlarlo seteamos a `onClick` con la funcion `todoDelete()` que recien creamos, y le pasamos como parametro el `todo.id` de cada tarea en particular

``` javascript
//Todo.jsx
return (
  <button onClick={() => todoDelete(todo.id)} > X </button>     
)
```
## Finalmente pasaremos a darle efectos a nuestro componente `App`

En este caso el efecto seran alertas con distintos *strings* para poder comprehender mejor el uso de el **HOOK** `useEffect()` y sus dependencias

Para ello, ingresamos en nuestro documento `App.jsx` y en el cuerpo de la funcion ppal `App` 
Haremos uso del **HOOK** `useEffect()` en dos ocasiones

1. Para renderizar un alert con el mensaje: "Bienvenido a tu primer Todo" .Este efecto debera aparecer **unicamente** la primera ves que renderizamos el componente. Para ello el *Array* de dependencias debera estar vacio

``` javascript
//App.jsx
useEffect( ()=> {

   alert("bienvenido a tu primer todo en react")

  }, [])

```
2. Para renderizar un alert con el mensaje: "Tu lista de tareas a sido modificada" .Este efecto debera aparecer **unicamente** cuando existan cambios en nuestro estado `todos`. Para ello el *Array* de dependencias debera incluir a `todos` en su interior

``` javascript
//App.jsx
useEffect( ()=> {

   alert("Tu lista de tareas a sido modificada")

  }, [todos])

```


