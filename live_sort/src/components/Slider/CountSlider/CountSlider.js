import React, {Component, Fragment} from 'react';
import Slider from "../Slider";

class CountSlider extends Component {
    render() {
        return (
            <Fragment>
                <Slider
                    labelEnabled={"Amount of elements"}
                    value={8}
                    // onToggle={this.toggleProcess}
                    onChange={this.changeAmount}
                    max={16}
                    min={4}
                    step={1}
                />
            </Fragment>
        );
    }

    changeAmount = (val) => {
        this.props.onChange(val);
    };
}

export default CountSlider;