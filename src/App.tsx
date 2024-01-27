import { RouterProvider } from 'react-router-dom';
import './App.scss'
import router from './Routes/router';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App
