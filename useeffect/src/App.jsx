import './App.css'
import DataFetching from './components/api-data-fetch/data-fetch'
import Counter from './components/counter/counter'
import DebouncedInput from './components/debounced-input/debounced-input'
import Search from './components/debounced-input/debounced-input'
import InputForm from './components/input-form/input-form'
import OnlineStatus from './components/online-status/online-status'
import ThemeSwitcher from './components/theme-switcher/theme-switcher'
import TimerCleanup from './components/timer-cleanup/timer-cleanup'
import WindowResize from './components/window-resize/window-resize'

function App() {


  return (
    <>
    {/* <Counter/> */}
    {/* <DataFetching/> */}
    {/* <WindowResize/> */}
    {/* <TimerCleanup/> */}
    {/* <InputForm/> */}
    {/* <ThemeSwitcher/> */}
    {/* <OnlineStatus/> */}
    <DebouncedInput/>
    </>
  )
}

export default App
