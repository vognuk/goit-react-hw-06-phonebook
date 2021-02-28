import React, { Component } from 'react'
// import { v4 as uuidv4 } from 'uuid'
import Container from './components/Container'
import Form from './components/Form'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import { connect } from 'react-redux'
import action from './redux/actions'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

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
    this.setState({ filter: e.target.value });
  };

  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(el =>
  //     el.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  render() {
    const { contacts, name, filter, number } = this.state;
    // console.log('checkContact', this.props.checkContact(number))
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
          value={filter}
          onChange={this.filterContacts}
        />

        <Contacts
          contacts={this.props.contacts}
          onDelete={this.props.delContact}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    contacts: state,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    delContact: id => dispatch(action.delContact(id)),
    initContacts: contacts => dispatch(action.initContacts(contacts)),
    // filterContacts
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
