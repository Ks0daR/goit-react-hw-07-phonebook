import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phoneBook/phoneBookActions';
import styles from './FilterForm.module.css';

function FilterForm({ filterValue, contacts, onSearchQuery }) {
  if (contacts.length === 1) {
    onSearchQuery();
  }
  return (
    <label className={styles.search}>
      {contacts.length > 1 && (
        <input
          value={filterValue}
          onChange={e => onSearchQuery(e.target.value)}
        />
      )}
    </label>
  );
}

FilterForm.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onSearchQuery: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filterValue: state.contacts.filter,
  contacts: state.contacts.contactsBase,
});

const mapDispatchToProps = {
  onSearchQuery: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);
