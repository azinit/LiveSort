import React, {Component, Fragment} from 'react';
import Slider from "../Slider";

/** Set speed of sorting as settings slider **/
class SpeedSlider extends Component {
    render() {
        return (
            <Fragment>

                <Slider
                    labelEnabled={"Sort speed"}
                    value={1}
                    step={0.25}
                    min={0.25}
                    max={8}
                    // onToggle={this.toggleProcess}
                    onChange={this.changeSpeed}
                />
            </Fragment>
        );
    }

    changeSpeed = (val) => { this.props.onChange(+val)};
}

export default SpeedSlider;