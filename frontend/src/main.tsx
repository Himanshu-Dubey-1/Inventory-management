import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { InventoryProvider } from './context/inventoryProvider'



createRoot(document.getElementById('root')!).render(
      <InventoryProvider>
          <App />
      </InventoryProvider>,
)
