import Rotas from './router'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { FormProvider } from './contexts/FormContext'

const App = () => {
  return (
    <FormProvider>
      <Router>
        <Rotas/>
      </Router>
    </FormProvider>
  );
}

export default App;