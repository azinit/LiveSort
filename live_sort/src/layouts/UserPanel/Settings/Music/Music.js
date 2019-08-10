import React, {Component} from 'react';
import Slider from "../../../../components/Slider/Slider";
class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: true,
            volume: 0.5,
        };
        this.audio = React.createRef();
    }

    componentDidMount() {
        this.audio.current.volume = this.state.volume;
    }

    render() {
        let value = this.state.volume * 100;
        return (
            <div className="music-panel">
                <Slider
                    labelEnabled={"Music ▶"} labelDisabled={"Music ▷"}
                    value={value}
                    onToggle={this.toggle}
                    onChange={this.changeVolume}
                />
                <audio ref={this.audio} src={this.props.src} loop autoPlay/>
            </div>
        );
    }

    changeVolume = (value) => {
        let newVolume = value  / 100;
        this.audio.current.volume = newVolume;
        this.setState({ volume: newVolume });
    };

    toggle = () => {
        let isPlaying = this.state.isPlaying;
        let music     = this.audio.current;

        if (isPlaying)  { music.pause(); }
        else            { music.play();  }

        this.setState({ isPlaying: !isPlaying });

    };
}

export default Music;