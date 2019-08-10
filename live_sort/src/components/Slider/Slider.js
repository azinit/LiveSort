import React, {Component} from 'react';
import './Slider.css'

// https://codesandbox.io/s/318jw3jjkq

class Slider extends Component {

    SLIDER_DISABLED = "slider__range_disabled";

    state           = {
        value:      this.props.value || 50,
    };

    label    = this.props.labelEnabled;
    rangeDOM = React.createRef();

    isToggleble = this.props.onToggle;

    render() {
        let label_hover = (this.isToggleble) ? "text_hover" : "";
        let value   = this.state.value;
        let step    = this.props.step || 5;
        let min     = this.props.min  || 0;
        let max     = this.props.max  || 100;

        return (
            <div className="slider">
                {this.props.children}
                <p className={`slider__label text ${label_hover}`} onClick={this.onClick}>
                    {`${this.label }: ${value}`}
                </p>
                <input
                    min={min} max={max} step={step} value={value}
                    type="range" className="slider__range"
                    onChange={this.onChange}
                    ref={this.rangeDOM}
                />
                {/*<h3>{this.state.value}</h3>*/}

                {/*<input*/}
                {/*    min="1" value={value}*/}
                {/*    type="range" className="slider" id="musicSettings"*/}
                {/*    onChange={this.changeVolume}*/}
                {/*/>*/}
            </div>
        );
    }

    onClick = (e) => {
        if (this.isToggleble) {
            // init args
            let rangeDOM = this.rangeDOM.current;
            let {labelEnabled, labelDisabled} = this.props;

            // togglePlaying Slider
            rangeDOM.classList.toggle(this.SLIDER_DISABLED);
            rangeDOM.disabled = !rangeDOM.disabled;
            // togglePlaying Label
            if (labelDisabled) {
                let isEnabled = !rangeDOM.classList.contains(this.SLIDER_DISABLED);
                this.label = (isEnabled) ? labelEnabled : labelDisabled;
            }
            // togglePlaying Parent
            this.props.onToggle();
        } else {
            console.log("Impossible to toggle!");
        }

    };

    onChange = (e) => {
        // console.log('onInput', evt.target.value);
        let value = e.target.value;
        this.props.onChange(value);
        this.setState({ value: value });
    };
}

export default Slider;