import styles from './App.module.css'

import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <Main />
    </div>
  )
}

export default App
