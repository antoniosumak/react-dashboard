import { Route } from 'react-router-dom';

//Pages
import CoronaAPI from './pages/CoronaAPI';
import Dashboard from './pages/DashBoard';

//Components
import Header from './components/Header/Header';
import { Main } from './lib/styles/generalStyles';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Route exact path="/" component={CoronaAPI} />
        <Route path="/dashboard" component={Dashboard} />
      </Main>
    </>
  );
}

export default App;
