import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './App.css'

// components ------------------
import Messenger from './components/Messenger'
import AccountProvider from './context/AccountProvider'

function App() {

  return (
    <div className='bg-blue-200 h-screen w-full text-black'>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
      ><AccountProvider>
          <Messenger />
        </AccountProvider>
      </GoogleOAuthProvider>

      <Toaster />
    </div>
  )
}

export default App
