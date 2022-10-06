import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Header } from './components/Header'
import { routes } from './constants/Routes'

export function App(){
  return(
      <BrowserRouter>
        <Header/>
        <Routes>
          {
            routes.map(({path,element},index) =><Route key={index} path={path} element={element}/>)
          }
        </Routes>
      </BrowserRouter>
  )
}