import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/router/router';

function App() {
  return (
    <div className="bg-gray-800">
     <RouterProvider router={router}>

     </RouterProvider>
    </div>
  );
}

export default App;
