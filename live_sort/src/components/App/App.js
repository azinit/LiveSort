import React, {Component} from 'react';
import NavPanel from "../../layouts/UserPanel/NavPanel";
import './App.css'
import ViewPanel from "../../layouts/ViewPanel/ViewPanel";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSorting:      false,
            isMusicOn:      false,
            areSoundsOn:    false,
        };
        this.viewPanel = React.createRef();
        this.navPanel = React.createRef();
    }

    render() {
        return (
            <div className="app-live-sort">
                <NavPanel
                    isSorting={this.state.isSorting}
                    handlerSpeed={this.handlerSetSpeed}
                    handlerCount={this.handlerSetCount}
                    handlerToggle={this.handlerToggle}
                    ref={this.navPanel}
                />
                <ViewPanel
                    isSorting={this.state.isSorting}
                    handlerSort={this.handlerSort}
                    handlerToggle={this.handlerToggle}
                    ref={this.viewPanel}
                />

            </div>
        );
    }

    /****************************** FUNCTIONALYTY ******************************/

    handlerToggle = () => {
        // https://www.w3schools.com/howto/howto_js_sidenav.asp
        // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav_push_opacity

        const NAV_DOM  = this.navPanel.current.DOM.current;
        const VIEW_DOM = this.viewPanel.current.DOM.current;

        VIEW_DOM.classList.toggle("view-panel_nav_visible");
        NAV_DOM.classList.toggle("nav-panel_visible");
    };

    handlerSetCount = (count) => { this.viewPanel.current.handlerCount(count) };
    handlerSetSpeed = (speed) => { this.viewPanel.current.handlerSpeed(speed) };
    handlerSort = (isSorting) => { this.setState({isSorting: isSorting}) }
}

export default App;