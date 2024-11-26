
import Navbar from './components/Navbar';


//  El archivo App.jsx actúa como el lugar donde se configura las rutas principales y los contenedores de la aplicación, 
// como el BrowserRouter en este caso estoy haciendolo aparte enun main, mientras que el MainLayout es más específico para 
// estructurar diseño común de las páginas 
// (como el Navbar, el Footer, etc.) y mostrar el contenido de las rutas a través del <Outlet />.

// App.jsx ya no es necesario en la configuración actual debido al enrutamiento en main.jsx.
const App = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      {/* Navbar */}
      <Navbar />
    
    </div>
  );
};

export default App;