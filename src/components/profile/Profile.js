import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Profile extends Component {
    render() {
        if(this.props.user == null){
            return <Redirect to={'/'}/>
        }
        return (
            <div>
                {this.props.user.firstName}
                {this.props.user.lastName}
                {this.props.user.birthDate}
                {this.props.user.phoneNumber}
                {this.props.user.roles}
            </div>
        );
    }
}

export default Profile;