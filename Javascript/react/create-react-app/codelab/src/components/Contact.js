import React, {Component} from 'react'
import ContactInfo from './ContactInfo'

export default class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
          keyword : '',
        contactData: [
          {name: "Abet", phone: '010-0000-0001'},
          {name: "Betty", phone: '010-0000-0002'},
          {name: "Timothy", phone: '010-0000-0003'},
          {name: "Rora", phone: '010-0000-0004'}
        ]
      }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }
    render(){
      const mapToComponent = (data) => {

        // 검색
        // 오름차순
        data.sort();  
        // filter, contact 을 파라메터로 받는다 
        data = data.filter(
            (contact) => {
                //return contact.name.indexOf(this.state.keyword) > -1;  // 이 경우 대문자로 검색해야함 a로 검색시 A는 검색되지 않음
                return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
            }
        )
        return data.map((contact, i) => {
          return ( <ContactInfo contact={contact} key={i} /> )
        })
      }
      return(
        <div>
            <h1>Contacts</h1>
            <input name="keyword" placeholder="Search" 
                value={this.state.keyword}
                onChange={this.handleChange} />
          { mapToComponent(this.state.contactData)}
        </div>
      )
    }
  }

