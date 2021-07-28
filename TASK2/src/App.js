import { Component } from 'react';
import './App.css';
import { CardList } from './components/cardList/cardList.component.jsx'
import { Bye } from './components/bye/bye.component.jsx'
class App extends Component {
  constructor() {
    super();
    this.state = {
      humans: [],

    }
  }
  fetchUserData() {
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then((users) => {
        console.log(this);

        this.setState({ humans: users.data })
      })
  }
  render() {
    const { humans } = this.state;
    return (
      <div className="App">
        <div className="Heading">
          <div>
            <h4>
              ZIPPY
            </h4>

            <button onClick={this.fetchUserData.bind(this)}>Get Users</button>
          </div>
        </div>
        <CardList monster={humans} />
        <Bye />
      </div>
    )
  }
}

export default App;
