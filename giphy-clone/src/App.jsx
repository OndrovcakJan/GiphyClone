import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'

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

        element: <Home />
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
