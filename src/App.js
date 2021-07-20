import './App.css';
import LandingPage from './LandingPage';
import { HashRouter, Route } from 'react-router-dom';
// import Project from './Project.js'
// import About from './About.js'
// import Blog from './Blog.js'
// import Contact from './Contact.js'
import Main from './Main.js'


function App() {
  return (
    // ERROR: make sure to close all broswers before running npm start..
    // The hash router was put in place to make sure that GitHub Pages could handle the switch
    <HashRouter basename='/'>
        <Route exact path="/" component={LandingPage} />
        <Route path="/Main" component={Main} />
    </HashRouter>
    // <div>
    //   <Main></Main>
    //   {/* <Router>
    //     <Switch>
    //       <Route path="/" exact component={Main} /> 
    //       <Route path="/Home" exact component={Main} /> 
    //       <Route path="/Project" exact component={Project} />
    //       <Route path="/About" exact component={About} />
    //       <Route path="/Blog" exact component={Blog} />
    //       <Route path="/Contact" exact component={Contact} />
    //     </Switch>
    //   </Router> */}
    // </div>
    
  );
}

export default App;
