import React from "react";
import "./App.css";
import NavBar from "./components/navbar.component";
import Counters from "./components/counters.component";
import MovieDetails from "./components/movie-details";
import NotFound from "./components/not-found";
import MoviesComponent from "./components/movies.component";
import Home from "./components/home";
import LoginForm from "./components/login-form";
import RegisterForm from "./components/register-form";
import { Route } from "react-router-dom";
import UserViewModel from './models/user-view-model';
import Posts from "./components/posts.component";
import TODoList from "./components/todo-list";


export const UserContext = React.createContext({
  currentUser: {},
  setCurrentUser: (user: UserViewModel) => { }, // a function signature
  showAlert: (msg: string) => { }
});


function App() {
  const _user: UserViewModel = { name: "Mahmoud", title: "Eng" };
  const [user, setUser] = React.useState(_user);

  function showAlertFromApp(msg: string) {
    console.log("Log from App Component: " + msg);
    alert("ShowAlert from App Component: " + msg)
  }
  /*
  const userContextData = {
    currentUser: {},
    setCurrentUser: (user: UserViewModel) => { } // a function signature
  };
  */

  return (

    <UserContext.Provider value={{ currentUser: user, setCurrentUser: setUser, showAlert: showAlertFromApp }}>  {/* value= {userContextData} */}
      <NavBar />

      <main className="container-fluid bg-light">
        <div className="routes">
          {/* Because / is included in all routes ==> this will result that some routes will contain two pages Ex: /home route will lead to a page containing Home component rendered twice 
            so, we use switch to match whole route and use (exact) to match only one route 
            Note: component that contains naigation links should be place rigth above the Switch element here (which is the <NavBar/> component) 
          */}
          <switch>
            <Route exact={true} path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route
              exact
              path="/counters"
              render={(props) => <Counters {...props}></Counters>}
            ></Route>
            <Route exact path="/movies" component={MoviesComponent}></Route>
            <Route exact path="/posts" component={Posts}></Route>
            <Route exact path="/todos" component={TODoList}></Route>
            <Route
              exact
              path="/movie-details/:id"
              render={(props) => <MovieDetails {...props}></MovieDetails>}
            ></Route>
            <Route exact path="/login" component={LoginForm}></Route>
            <Route exact path="/register" component={RegisterForm}></Route>
            <Route
              exact
              path="/not-found"
              render={(props) => {
                return <NotFound {...props}></NotFound>;
              }}
            ></Route>
            {
              // you must send props if you need to use history, location, ... objects
            }
            {/* <Redirect to="/not-found"></Redirect> */}
          </switch>
        </div>
      </main>

    </UserContext.Provider>

  );
}

export default App;
