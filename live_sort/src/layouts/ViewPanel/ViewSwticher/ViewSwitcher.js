import React, {Component} from 'react';
import Thumbnail from "../../../components/View/Thumbnail/Thumbnail";
import thumb_array from './view_array.jpg'
import thumb_bubble from './view_bubble.jpg'
import thumb_column from './view_column.jpg'

import {range} from "../../../lib/utils";

class ViewSwitcher extends Component {
    state = {
        active: this.props.active
    };

    render() {
        const thumbnails = this.computeThumbnails();
        return (
            <div className="view-panel__switcher block">
                {thumbnails}
                {/*<Thumbnail label={"Boxes View"}*/}
                {/*           src={thumb_array}*/}
                {/*           id={0} active={0 === this.state.active}*/}
                {/*           onClick={this.onClick}*/}
                {/*/>*/}
                {/*<Thumbnail label={"Creative View"}*/}
                {/*           src={thumb_bubble}*/}
                {/*           id={1}*/}
                {/*           onClick={this.onClick}*/}
                {/*/>*/}
            </div>
        );
    }

    computeThumbnails = () => {
        let labels = ["Boxes View", "Creative View", "Column View"];
        let sources = [thumb_array, thumb_bubble, thumb_column];
        let indices = range(labels.length);
        return indices.map(i =>
            <Thumbnail
                disabled={i === 2}
                key={i}
                label={labels[i]}
                src={sources[i]}
                id={i}
                active={this.state.active === i}
                onClick={this.onClick}
            />
        )
    };

    onClick = (i) => {
        this.setState({active: i});
        this.props.onSwitch(i);
    }
}

export default ViewSwitcher;