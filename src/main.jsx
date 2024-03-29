import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <div className='max-w-screen-lg mx-auto'> */}
   
    
  
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>

  
   
    {/* </div> */}
  </React.StrictMode>,
)
