import { connect } from 'react-redux';
import App from './App';

import { updateViewport } from 'redux/actions';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = {
  updateViewport,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
