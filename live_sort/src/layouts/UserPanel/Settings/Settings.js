import React, {Component} from 'react';
import musicfile from '../../../audio/music/background_dark.mp3'
import MusicSlider from "../../../components/Slider/MusicSlider/MusicSlider";
import SpeedSlider from "../../../components/Slider/SpeedSlider/SpeedSlider";
import CountSlider from "../../../components/Slider/CountSlider/CountSlider";
import './Settings.css'

class Settings extends Component {
    settings    = React.createRef();
    sliders     = React.createRef();

    render() {
        return (
            <div className="user-panel__inner-block user-panel__settings settings block_expanded" ref={this.settings}>
                <h2 className="user-panel__header header fancy-text text_hover" onClick={this.expand}>Settings</h2>
                <div className="settings__sliders" ref={this.sliders}>
                    <MusicSlider src={musicfile}/>
                    <SpeedSlider onChange={this.props.handlerSpeed}/>
                    <CountSlider onChange={this.props.handlerCount}/>
                    {/*Sounds https://codepen.io/tracer223/pen/oaEvEe?editors=0010*/}
                    {/*<Slider label={label} value={value} onToggle={this.toggle} onChange={this.changeVolume}/>*/}
                    {/*<button className="user-panel__btn btn" onClick={this.props.handlerMusic}>Play Music</button>*/}
                </div>
            </div>
        );
    }

    expand = () => {
        this.sliders.current.classList.toggle("b_hidden");
        this.settings.current.classList.toggle('user-panel__inner-block');
    }
}

export default Settings;