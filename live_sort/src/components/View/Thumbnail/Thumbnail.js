import React, {Component} from 'react';
import './Thumbnail.css'

/**
 * Thumbnail of {component} for demonstrate and selecting
 * **/
class Thumbnail extends Component {
    render() {
        const {active, src, label, disabled} = this.props;
        const activeClass   = (active)   ? "thumbnail_active"   : "";
        const disabledClass = (disabled) ? "thumbnail_disabled" : "";
        return (
            <div className={`thumbnail ${activeClass} ${disabledClass} b_unselectable`} onClick={this.onClick}>
                <img className="thumbnail__img" src={src} alt=""/>
                <p className="thumbnail__label">{label}</p>
            </div>
        );
    }

    onClick = () => {
        if (!this.props.disabled) {
            this.props.onClick(this.props.id);
        }
    }
}

export default Thumbnail;