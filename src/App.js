import React, { Component } from 'react';
import InputBar from './components/InputBar';
import ListItem from './components/ListItem';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      listItem: [],
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleChange(value) {
    this.setState({
      input: value
    })
  }
  handleSubmit() {
    
    const { input, listItem } = this.state;
    this.setState({
      input: '',
      listItem: input !== '' ? listItem.concat({ name : input , date : new Date(Date.now()).toLocaleString()}) : []
    })

  }
 handleRemove(name) {
   const { listItem } = this.state;
   const removeByName = listItem.filter( val => val.name !== name )
   this.setState({
     listItem : removeByName
   })
  
 }
 
  render() {
    const { listItem } = this.state;
    const Item = listItem.map( (val,i) =>  <ListItem 
                                           key={i} 
                                           onRemoveFromParent={ this.handleRemove }
                                           {...val} />)
 
    return (
      <div className="App">
        <h3>Todo App</h3>
       
         <InputBar 
         onSubmitFromParent={this.handleSubmit} 
         onChangeFromParent={this.handleChange} 
         value={this.state.input}
         />
         <ul>
            { Item }
         </ul>
        
      </div>
    );
  }
}

export default App;
