import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Picture from './components/Picture';
import data from './data/data';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      pictures: data.pictures,
      pic: data.pictures[0]
    }
  }

  componentDidMount(){
    let index = 1;
    
    
    setInterval(() => {
      if(index === this.state.pictures.length){
        this.restartPicture();
        index = 1;
        
      } else {
        this.nextPicture()
        index++
      }
    }, 5000)
  }

  nextPicture = () => {
    const newIndex = this.state.pic.index+1;
    this.setState({
      pic: data.pictures[newIndex]
    })
  }

  restartPicture = () => {
    this.setState({
      pic: data.pictures[0]
    })
    
  }

  render(){
    const {pictures, pic} = this.state;
    return (
      <div className="App">
        <Title/>
        <Picture pic={pic} />
      </div>
    );
  }
}

export default App;
