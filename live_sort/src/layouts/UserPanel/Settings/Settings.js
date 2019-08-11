import React, {Component} from 'react';
import MusicSlider from "../../../components/Slider/MusicSlider/MusicSlider";
import SpeedSlider from "../../../components/Slider/SpeedSlider/SpeedSlider";
import CountSlider from "../../../components/Slider/CountSlider/CountSlider";
import './Settings.css'


class Settings extends Component {
    state = {
        expanded: true
    };
    settings    = React.createRef();
    sliders     = React.createRef();
    label       = React.createRef();

    render() {
        const {handlerCount, handlerSpeed, isSorting} = this.props;
        const label              = (this.state.expanded) ? "Settings" : "⚙";
        return (
            <div className="nav-panel__inner-block nav-panel__settings settings block_expanded" ref={this.settings}>
                <h2 className="nav-panel__header header text_fancy text_hover" onClick={this.expand} ref={this.label}>
                    {label}
                </h2>
                <div className="settings__sliders" ref={this.sliders}>
                    <MusicSlider/>
                    <SpeedSlider onChange={handlerSpeed}/>
                    <CountSlider onChange={handlerCount} disabled={isSorting}/>
                    {/*Sounds https://codepen.io/tracer223/pen/oaEvEe?editors=0010*/}
                </div>
            </div>
        );
    }

    expand = () => {
        this.sliders.current.classList.toggle("b_hidden");
        this.settings.current.classList.toggle('nav-panel__inner-block');
        this.label.current.classList.toggle('text_fancy');
        this.setState({expanded: !this.state.expanded})
    }
}

export default Settings;