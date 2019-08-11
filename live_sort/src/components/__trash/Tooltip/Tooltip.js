import React, {Component, Fragment} from 'react';
import './Tooltip.css'


class Tooltip extends Component {
    render() {
        const {children, content} = this.props;
        return (
            <Fragment className="tooltip">
                {children}
                <span className="tooltip__text">{content}</span>
            </Fragment>
        );
    }
}

export default Tooltip;