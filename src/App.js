import DynamicForm from './components/DynamicForm/DynamicForm';
import Introduction from './components/Introduction/Introduction';
import NavBarMenu from './components/NavBarMenu';
import Services from './components/Services';


function App() {
  return (
    <div>
        <NavBarMenu />
        <Introduction />
        <Services />
        <DynamicForm />
    </div>
  );
}

export default App;
