import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Productprovider from './contexts/ProductContext.jsx'

//sidebar provider

import SidebarProvider from './contexts/SidebarContext.jsx'

createRoot(document.getElementById('root')).render(
 <SidebarProvider>
  <Productprovider>
<StrictMode>
    <App />
  </StrictMode>
  </Productprovider>
 </SidebarProvider>

  ,
)
