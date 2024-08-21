import { createBrowserRouter,
         createRoutesFromElements,
         Route,
         RouterProvider
         } from 'react-router-dom';


         
import './App.css';


//pages
import Graphics from './Graphics';
import Uidesigns from './Uidesigns';

//Layouts
import RootLayout from './RootLayout';
import NotFound from './NotFound';


const routes = createBrowserRouter(

          createRoutesFromElements(

            <Route path="/" element={<RootLayout/>}>

              <Route index element={<Graphics/>}/>
              <Route path='/uidesigns' element={<Uidesigns/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Route>

  )
)


function App() {


  return (
   
       <RouterProvider router={routes} />
   

  );
}

export default App;
