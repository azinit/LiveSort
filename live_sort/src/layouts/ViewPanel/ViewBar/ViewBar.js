import React, {Component} from 'react';

class ViewBar extends Component {
    render() {
        return (
            <div className="view-panel__header element_center-hv">
                <button className="view-panel__btn btn" onClick={this.props.onSort}>▶</button>
                <button className="view-panel__btn btn" onClick={this.props.onGenerate}>⟳</button>
            </div>
        );
    }
}

export default ViewBar;