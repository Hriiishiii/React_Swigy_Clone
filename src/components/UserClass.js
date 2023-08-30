import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count : 0
        }
        console.log('child constructor')
    }

    componentDidMount () {
        console.log('child component did mount')
    }

    render () {
        const {name} = this.props;
        const {count} = this.state;

        console.log('child render')

        return (
            <>
            <div className="card">
            <h1>Count: {count}</h1>
            <button onClick={() => {
                // Never Update the State Variable Directly
                this.setState ({
                    count : this.state.count + 1
                })
            }}>Increse Count</button>
            <h1>Name: {this.props.name}</h1>
            <p>Role: SFCC Developer</p>
            </div>
            </>
        )
    }
}

export default UserClass;