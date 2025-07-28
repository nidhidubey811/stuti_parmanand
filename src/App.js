import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import PortfolioPage from './PortfolioPage'
function App(){
  return(

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioPage />
  </React.StrictMode>,
)
);
}
export default App ;