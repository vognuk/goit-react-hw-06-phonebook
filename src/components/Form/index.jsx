import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import Heading from '../Heading'
import NotificationNumberExist from '../NotificationNumberExist'
import Animation from '../NotificationNumberExist/Animation.module.css'
import s from './Form.module.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import validatePhoneNumber from '../../utils/validator'
import action from '../../redux/actions'

class Form extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onChange: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  };

  state = {
    name: '',
    number: '+380',
    sameContact: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    if (this.props.contacts.some(elem => elem.number === number)) {
      this.setState({ sameContact: true });
      setTimeout(() => {
        this.setState({ sameContact: false });
      }, 1000);
      this.reset();
      return;
    }

    if (validatePhoneNumber(number) === true) {
      this.props.addContact(name, number);
    } else {
      alert("Enter correct number, please")
    }
    this.reset();
  };

  reset() {
    this.setState({ name: '', number: '+380' });
  }

  render() {
    // const { addContact } = this.props;
    const { name, number, sameContact } = this.state;
    return (
      <>
        <div className="heading">
          <Heading />

          <CSSTransition
            in={sameContact}
            timeout={250}
            classNames={Animation}
            unmountOnExit
          >
            <NotificationNumberExist message="The contact is already exists." />
          </CSSTransition>
        </div>
        <form className={s.form}
          onSubmit={this.handleSubmit}
        >
          <label className={s.label}>
            Name
            <span className={s.star}>&#42;</span>
            <input
              className={s.input}
              type='text'
              name='name'
              placeholder='Enter the name'
              value={name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className={s.label}>
            Number<span className={s.star}>&#42;</span>
            <input
              className={s.input}
              type='number'
              name='number'
              placeholder='+380'
              value={number}
              maxLength="13"
              onChange={this.handleChange}
              required
            />
            <span className={s.rule}>
              <span className={s.star}>&#42;</span> - obligatory fields.
            </span>
          </label>
          <button
            className={s.button}
            disabled={false}
          >
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    contacts: state.contacts.items,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: (name, number) => dispatch(action.addContact(name, number)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
