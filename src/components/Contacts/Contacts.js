import React from 'react';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import {
  changeFilter,
  removeContact,
} from '../../redux/phoneBook/phoneBookActions';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const Contacts = ({ elements, theme, onRemove }) => {
  return (
    <>
      <h2 className={theme ? styles.Title : styles.TitleDark}>Contacts</h2>
      <ul className={styles.list}>
        {elements.length > 0
          ? elements.map(({ id, name, number }) => (
              <ContactListItem
                key={id}
                id={id}
                name={name}
                number={number}
                onRemove={() => onRemove(id, elements.length)}
                theme={theme}
              />
            ))
          : null}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => {
  const { contactsBase, filter } = state.contacts;
  console.log(contactsBase);
  const visibleContacts = contactsBase.filter(element =>
    element.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return {
    theme: state.theme,
    elements: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onRemove: (id, count) => {
    if (count < 2) {
      dispatch(changeFilter(''));
    }
    dispatch(removeContact(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
