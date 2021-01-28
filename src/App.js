import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import PostId from './components/PostId';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/posts/new" render={() => <NewPost />} />
          <Route path="/posts/:id" render={() => <PostId />} />
          <Route path="/" exact render={() => (
           <>
          <Header />
          <Posts />
          </>
          )}/>
          <Route render={() => <div>PAGE 404</div> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
