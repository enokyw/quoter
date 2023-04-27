import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { StyleProvider } from './context/styledContext';
import 


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Home />} errorElement={<></>}>
    <Route errorElement={<></>}>
      <Route index={true} element={<></>} />
      <Route path='login' element={<></>} />
    </Route>
  </Route>
))

function App() {

  return (
    <StyleProvider>
      <RouterProvider router={router}/>
    </StyleProvider>
  )
}

export default App
