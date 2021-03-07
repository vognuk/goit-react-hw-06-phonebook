import React, { Component } from 'react'
import Container from './components/Container'
import Form from './components/Form'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import { connect } from 'react-redux'
import action from './redux/actions'

class App extends Component {

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) this.props.initContacts(parsedContacts);
  }

  componentDidUpdate(prevProps) {
    const { contacts: nowContacts } = this.props;
    const { contacts: prevContacts } = prevProps;
    if (nowContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nowContacts));
    }
  }

  filterContacts = e => {
    this.props.filterContacts(e.target.value);
  };

  render() {
    const { contacts, name, filter, number } = this.props;
    // console.log(this.props.contacts)
    return (
      <Container>
        <Form
          name={name}
          number={number}
          contacts={contacts}
          onChange={this.handleChange}
          onSubmit={this.checkContact}
        ></Form>

        <Filter
          value={filter}//console.log(filter)

          onChangeFilter={this.filterContacts}
        />

        <Contacts
          contacts={this.props.contacts}
          onDelete={this.props.delContact}
          filter={filter}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    delContact: id => dispatch(action.delContact(id)),
    initContacts: contacts => dispatch(action.initContacts(contacts)),
    filterContacts: filter => dispatch(action.filter(filter)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
