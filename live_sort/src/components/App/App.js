import React, {Component} from 'react';
import UserPanel from "../../layouts/UserPanel/UserPanel";
import './App.css'
import ViewPanel from "../../layouts/ViewPanel/ViewPanel";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSortOn:       false,
            isMusicOn:      false,
            areSoundsOn:    false,
        };
        this.view = React.createRef();
    }

    render() {
        return (
            <div className="app-live-sort">
                <UserPanel
                    handlerSpeed={this.handlerSetSpeed}
                    handlerCount={this.handlerSetCount}
                />
                <ViewPanel
                    ref={this.view}
                />

            </div>
        );
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (nextState.isSortOn) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    //
    // }

    /****************************** FUNCTIONALYTY ******************************/

    handlerSetCount = (count) => {
        this.view.current.handlerViewCount(count);
    };

    handlerSetSpeed = (speed) => {
        this.view.current.handlerViewSpeed(speed);
    };
    // runSort = () => {
    //     console.log("----------------------", "SORT", "----------------------");
    //     this.view.current.handlerViewSort();
    //     // if (!this.state.isSortOn) {
    //     //     this.setState({isSortOn: true});
    //     //
    //     //     this.setState({isSortOn: false});
    //     // } else {
    //     //     console.log("ALREADY IN SORT!");
    //     // }
    // };

    // runGenerate = (n) => {
    //     console.log("----------------------", "GENERATE", "----------------------");
    //     this.view.current.handlerViewGenerate(n);
    // };

    // runMusic = () => {
    //     console.log("----------------------", "MUSIC", "----------------------");
    // }
}

export default App;