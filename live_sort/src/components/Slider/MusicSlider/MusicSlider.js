import React, {Component, Fragment} from 'react';
import Slider from "../Slider";
import music_fire from '../../../audio/music/background_fire.mp3'
import music_fluid from '../../../audio/music/background_fluid.mp3'
import music_engage from '../../../audio/music/background_engage.mp3'
import music_person from '../../../audio/music/background_person.mp3'
import music_light from '../../../audio/music/background_light.mp3'
import {randomChoice} from "../../../lib/utils/array";

/** Music control settings slider **/
class MusicSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: true,
            volume: 0.5,
            music: this.getRandomMusic()
        };
        this.audio = React.createRef();
    }

    // Set initial volume
    componentDidMount() { this.audio.current.volume = this.state.volume }

    render() {
        return (
            <Fragment>
                <Slider
                    labelEnabled={"[ ▶ ] Music"} labelDisabled={"[ ▷ ] Music"}
                    value={this.state.volume * 100}
                    onToggle={this.togglePlaying}
                    onChange={this.changeVolume}
                >
                    <audio ref={this.audio} src={this.state.music} onEnded={this.switchMusic} autoPlay/>
                </Slider>
            </Fragment>
        );
    }

    // Change volume of music
    changeVolume = (value) => {
        let newVolume = value  / 100;
        this.audio.current.volume = newVolume;
        this.setState({ volume: newVolume });
    };

    getRandomMusic = () => randomChoice([music_fire, music_fluid, music_engage, music_person, music_light]);

    // https://stackoverflow.com/questions/9346579/how-can-i-tell-when-an-html5-audio-element-has-finished-playing
    switchMusic = () => { this.setState({music: this.getRandomMusic()}) };

    // Play (on/off) music
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