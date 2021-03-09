
import './App.css';
import ComponetD from './ComponetD';
import {UserProvider} from './Context'

function App() {
  const rock='we are lerning'
  return (
    <div className="App">
     component App
     <UserProvider value={rock}>
       <ComponetD />
       </UserProvider>
     
     
     
    </div>
  );
}

export default App;
