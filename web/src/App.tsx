import './styles/global.css';
import { Habit } from "./components/Habits";

function App() {
 

  return (
    <div>
      <Habit completed={5} />
      <Habit completed={10} />
      <Habit completed={15} />
      <Habit completed={20} />
    </div>
    
    
  )
}

export default App
