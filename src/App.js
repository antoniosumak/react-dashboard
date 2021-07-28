import { Route } from 'react-router-dom';

//Pages
import CoronaAPI from './pages/CoronaAPI';
import Dashboard from './pages/DashBoard';
import Blog from './pages/Blog';

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
        <Route path="/blog" component={Blog} />
      </Main>
    </>
  );
}

export default App;
