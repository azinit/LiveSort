import React, {Component, Fragment} from 'react';
import Slider from "../Slider";

class MusicSlider extends Component {
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
        return (
            <Fragment>
                <Slider
                    labelEnabled={"[ ▶ ] Music"} labelDisabled={"[ ▷ ] Music"}
                    value={this.state.volume * 100}
                    onToggle={this.togglePlaying}
                    onChange={this.changeVolume}
                >
                    <audio ref={this.audio} src={this.props.src} loop autoPlay/>
                </Slider>
            </Fragment>
        );
    }

    changeVolume = (value) => {
        let newVolume = value  / 100;
        this.audio.current.volume = newVolume;
        this.setState({ volume: newVolume });
    };

    togglePlaying = () => {
        let isPlaying = this.state.isPlaying;
        let music     = this.audio.current;

        music.playbackRate=1;

        if (isPlaying)  { music.pause(); }
        else            { music.play();  }

        this.setState({ isPlaying: !isPlaying });

    };
}

export default MusicSlider;