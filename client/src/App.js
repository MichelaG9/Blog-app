import Navigationbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Components/Create';
import BlogDetail from './Components/BlogDetail';
import CategoryDetail from './Components/CategoryDetail';
import NotFound from './Components/NotFound';
import AllBlogs from './Components/AllBlogs';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-xl">
          <Navigationbar />
          <div className="content">
            <Switch>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/new">
                <Create />
              </Route>

              <Route path="/blogs/all">
                <AllBlogs />
              </Route>

              <Route path="/blogs/:id">
                <BlogDetail />
              </Route>

              <Route path="/categories/:category">
                <CategoryDetail />
              </Route>

              <Route path="*">
                <NotFound />
              </Route>

            </Switch>
          </div>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
