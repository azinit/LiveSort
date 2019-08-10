import React, {Component} from 'react';
import './UserPanel.css'
import TextBlock from "./TextBlock/TextBlock";
import Settings from "./Settings/Settings";
import Copyright from "./Copyright/Copyright";

class UserPanel extends Component {
    render() {
        return (
            <div className="user-panel">
                <TextBlock/>
                <Settings
                    handlerSpeed={this.props.handlerSpeed}
                    handlerCount={this.props.handlerCount}
                />
                <Copyright/>
            </div>
        );
    }
}

export default UserPanel;