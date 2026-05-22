import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'

import Home from './pages/home'
import Category from './pages/category'
import Search from './pages/search'
import GifPage from './pages/gif-page'
import Favorites from './pages/favorites'



//homepage
//categories
//search
//single gif page
//favorites


const router = createBrowserRouter([
  {

    element: <AppLayout />,

    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:category',
        element: <Category />,
      },
      {
        path: '/:search/query',
        element: <Search />,
      },
      {
        path: '/:type/:slug',
        element: <GifPage />,
      },
      {
        path: '/favorites',
        element: <Favorites />
      }
    ]


  }
])

function App() {
  return (<h1 className="text-4xl font-bold text-blue-500">
  Tailwind funguje
</h1>)
}

export default App
