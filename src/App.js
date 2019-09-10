import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/header';
import About from './components/pages/About';
import Sort from './components/Sort';
import Login from './components/pages/Login';
import axios from 'axios';
// import UUID from 'uuid';

import './App.css';


class App extends Component {
  state = {
    todos: [],
    authenticated: false
  }

  componentDidMount() {
    axios.get('http://localhost:9000/todos/')
      .then(res => this.setState({ todos: res.data }));
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`http://localhost:9000/todos/${id}`)
      .then(res =>
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
      );
  }

  // Add Todo
  addTodo = (title) => {
    axios.post('http://localhost:9000/todos/', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: res.data })
      )
  }

  // Sort Tasks Alphabetically
  doSort = (sortOrder) => {
    this.setState({
      todos: [
        ...this.state.todos.sort(function (a, b) {
          let titleA = a.title.toLowerCase();
          let titleB = b.title.toLowerCase();

          if (sortOrder) {
            return titleB.localeCompare(titleA);
          } else {
            return titleA.localeCompare(titleB)
          }
        })
      ]
    })
  }

  tryLogin = (certs) => {
    if (certs.username === "griat" && certs.password === "password") {
      console.log("Log-in Successful!")
      this.setState({ authenticated: true });
    } else {
      console.log("Log-in Failed!")
      this.setState({ authenticated: false });
    }
  }

  redirectAfterLogin = () => {
    if (this.state.authenticated) {
      return <Redirect to="/home" />
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" component={() => (<Redirect to='/login' />)} />
            <Route exact path="/login" render={() => (
              <Fragment>
                {this.redirectAfterLogin()}
                <Login tryLogin={this.tryLogin} />
              </Fragment>
            )} />
            <Route exact path="/home" render={() => (
              <Fragment>
                <Sort doSort={this.doSort} />
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo} />
              </Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}


export default App;