
import './App.css'
import UserContextProvider from './components/context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  

  return (
    <UserContextProvider>
      <div className=''>
      <h1 className='text-3xl font-semibold text-center my-8 text-[#090e01a1]'>Project On Context API</h1>
       <Login />
       <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
