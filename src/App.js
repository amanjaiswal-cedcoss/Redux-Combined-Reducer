import { Provider } from 'react-redux';
import './App.css';
import Shop from './features/Shop';
import { store } from './features/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Shop/>
    </div>
    </Provider>
  );
}

export default App;
