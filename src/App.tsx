import './App.css'

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RoutesContext from './RoutesContext/RoutesContext';

function App() {

  return (
  <AuthProvider>
    <BrowserRouter>
      <RoutesContext/>
    </BrowserRouter>
  </AuthProvider>
  )
}

export default App
