import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AdvancedButton } from './components/AdvancedButton.tsx';


function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div>
        <h1 className="text-2xl font-bold mb-4">Advanced Button Component</h1>
      <AdvancedButton text="Button CTA" />
    </div>
  )
}

export default App
