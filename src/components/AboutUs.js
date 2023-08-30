import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/ContextUser";

class About extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userInfo : {
                name : 'dummy',
                location : 'dummy'
            }
        }

        console.log('Parent Constructor')
    }

    async componentDidMount () {

        // to make a API call
        const data = await fetch('');
        const json = data.json();

        this.setState ({
            userInfo : json
        })

        this.timer = setInterval(() => {
            console.log('setInterval')
        }, 1000);

        console.log('parent component did mount')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component did update')
    }

    componentWillUnmount () {
        // removing from the UI or disabling from the UI
        // clean up
        clearInterval(this.timer);
    }

    render () {
        console.log('Parent render')
        return (
            <>
            <UserContext.Consumer>
                {({user}) => <h3>{user.name} - {user.role}</h3>}
            </UserContext.Consumer>
            <h1>About Us</h1>

            {/* <UserClass name={'HrishiDon-(class)'} /> */}
            </>
        )
    }
}

export default About;