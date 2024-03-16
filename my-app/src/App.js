import './App.css';
import SignIn from './Pages/SignIn';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App bg-custom-dark p-4 h-full">
      <NavBar/>
      <SignIn/>
    </div>
  );
}

export default App;
