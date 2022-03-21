# React-Pokemon
## Documentación React
### Crear Proyecto
```
npx create-react-app my-app --template typescript
cd my-app
npm start
```
### Tipado de los componentes
```
function App() : JSX.Element
```
### Instalar Material UI
```
npm install @mui/material @emotion/react @emotion/styled
```
### SWR - stale-while-revalidate
#### Intalación de SWR
```
npm install swr
```
#### Envoltura de fetch
```
const fetcher = (...args) => fetch(...args).then(res => res.json())
```
#### Uso
```
import useSWR from "swr"

function Profile () {
  const { data, error } = useSWR("/api/user/123", fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // renderizar datos
  return <div>hello {data.name}!</div>
}
```
### React Router Dom
####Instalacion
´´´
npm install react-router-dom@6
´´´

