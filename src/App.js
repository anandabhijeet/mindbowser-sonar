import React, { useEffect } from 'react'
import Home from './pages'

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <Home />
  )
}

export default App;
