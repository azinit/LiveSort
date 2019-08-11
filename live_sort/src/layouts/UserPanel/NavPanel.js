import React, {Component} from 'react';
import './NavPanel.css'
import InfoBlock from "./InfoBlock/InfoBlock";
import Settings from "./Settings/Settings";
import Copyright from "./Copyright/Copyright";

class NavPanel extends Component {
    DOM     = React.createRef();

    render() {
        const {handlerCount, handlerSpeed, isSorting} = this.props;
        return (
            <div className="nav-panel" ref={this.DOM}>
                <button className="nav-panel__close-btn btn btn_inline" onClick={this.props.handlerToggle}>
                    &times;
                </button>
                <InfoBlock/>
                <Settings
                    isSorting={isSorting}
                    handlerSpeed={handlerSpeed}
                    handlerCount={handlerCount}
                />
                <Copyright/>
            </div>
        );
    }
}

export default NavPanel;