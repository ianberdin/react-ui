import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Button} from '@/components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App theme-light">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React UI</h1>
      
      <div className="card">
        <Button label={'hello'}
                primary={true}
                backgroundColor={'red'}
                size={'small'}
                onClick={() => setCount((count) => count + 1)}></Button>
      </div>
    </div>
  )
}

export default App