import { connect } from 'react-redux'
import App from '../components/App.jsx'

const mapStateToProps = (state) => ({
    score: state.score,
    isFinished: state.isFinished
})

const AppContainer = connect(
    mapStateToProps
)(App)

export default AppContainer