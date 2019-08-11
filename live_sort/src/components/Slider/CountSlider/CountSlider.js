import React, {Component, Fragment} from 'react';
import Slider from "../Slider";

/** Count of elements settings slider **/
class CountSlider extends Component {
    render() {
        return (
            <Fragment>
                <Slider
                    labelEnabled={"Amount of elements"}
                    value={8}
                    onChange={this.changeAmount}
                    max={16}
                    min={4}
                    step={1}
                    disabled={this.props.disabled}
                />
            </Fragment>
        );
    }

    changeAmount = (val) => { this.props.onChange(val) };
}

export default CountSlider;