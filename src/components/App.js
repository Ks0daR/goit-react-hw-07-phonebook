import React, { Component } from 'react';
import Layout from './Layout';
import Loader from './Loader';
import { connect } from 'react-redux';
import { fetchContacts } from '../redux/phoneBook/phoneBookOperations';
import PhoneBookPage from '../pages/PhoneBookPage';

class App extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <Layout>
        {this.props.error && <h1>Ooops... Something went wrong</h1>}
        {this.props.loader && <Loader />}
        <PhoneBookPage />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  loader: state.contacts.loader,
  error: state.contacts.error,
});

const mapDispatchToProps = {
  getContacts: fetchContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
