import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Productprovider from './contexts/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <Productprovider>
<StrictMode>
    <App />
  </StrictMode>
  </Productprovider>
  ,
)
