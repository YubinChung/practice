import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import './App.css';
import Myname from './components/Myname';
import PhoneForm from './components/PhoneForm';

class App extends Component {

  id = 2
  state = {
    information: [
      {
        id: 0,
        name:'김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name:'홍길동',
        phone:'010-0000-0001'
      }
    ]
  }
  // mount
  constructor (props) {
    super(props)
    this._clickEvent = this._clickEvent.bind(this)
    this._onOpenModal = this._onOpenModal.bind(this)
    this._onCloseModal = this._onCloseModal.bind(this)
    this.state = {
      open : false,
    }
    console.log('constructor')
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  // 변경
  componentWillReceiveProps(nextProps) {
    console.log('componentWillRecieveProps', this.state.open)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', this.state.open)
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate', this.state.open)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate', this.state.open)
  }
  // 언마운트
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

    // modal
  _onOpenModal = () => {
    this.setState({ open: true });
  };
 
  _onCloseModal = () => {
    this.setState({ open: false });
  };

  _inputHandler = (data) => {
    console.log(data);
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat( { id: this.id++, ...data })
    })
  }


  render() {
    console.log('render')
   const { open, information } = this.state;
    return (
      <div className="App">
        <Myname name="리액트" />

        <PhoneForm inputHandler={this._inputHandler} onCreate={this.handleCreate} />
        {JSON.stringify(information)}

        <button onClick={this._clickEvent}>setState</button>
        
        <div>
          
          <button onClick={this._onOpenModal}>Open modal</button>
          <Modal open={open} onClose={this._onCloseModal} little>
            <h2>Simple centered modal</h2>
          </Modal>
        </div>
      </div>
    )
  }
  _clickEvent() {
    this.setState( { open : !this.state.open}) 
  }
}

export default App;
