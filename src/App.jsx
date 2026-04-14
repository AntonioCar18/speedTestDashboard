import './App.css'
import NavBar from './components/navbar'
import Dashboard from './pages/dashboard'

function App() {
  return (
    <div>
    <div className='bg-gray-200 w-screen flex items-center justify-center top-0 z-50 sticky'>
      <NavBar />
    </div>
    <div>
      <Dashboard />
    </div>
    </div>
  )
}

export default App
