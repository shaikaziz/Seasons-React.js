const React = require('react')
const ReactDOM = require('react-dom')
const SeasonDisplay = require('./SeasonDisplay')
const Spinner = require('./Spinner')

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    state = { lat: null, err: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude, long: position.coords.longitude}),
            error => this.setState({err: "There is an error "+error})
        )
    }
    renderContent() {
        if(!this.state.err && this.state.lat) 
        return (
            <SeasonDisplay latitude={this.state.lat}/>
        )
        if(this.state.err && !this.state.lat) 
        return (
            <div>
            {/* <div className=" ">latitude: {this.state.lat}</div> */}
            <div className="error">{this.state.err}</div>
            </div>
        )
        return <Spinner message="Please accept location..."/>
    }
    render() {
        return (
        <div>
            {this.renderContent()}
        </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)