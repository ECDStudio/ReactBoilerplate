import { connect } from 'react-redux';
import App from './App';

import { updateViewport } from 'src/redux/actions';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = {
  updateViewport,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
