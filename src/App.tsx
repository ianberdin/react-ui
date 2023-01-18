import {useState} from 'react'
import {Button} from '@/components/Button'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App theme-light"
         style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <div>
        <Button type="primary"
                size="large"
                onClick={() => setCount((count) => count + 1)}>Count {count}</Button>
      </div>
    </div>
  )
}

export default App
