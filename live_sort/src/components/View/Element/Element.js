import React, {Component} from 'react';

/** Element of List ([0], [1], ...) **/
class Element extends Component {
    DOM = React.createRef();

    componentWillMount() {
        let {className} = this.props;
        this.STATE_SELECTED     = `${className}_selected`;
        this.STATE_ACTIVE       = `${className}_active`;
        this.STATE_DISABLED     = `${className}_disabled`;
        this.STATE_HIDDEN       = "b_hidden";
    }

    render() {
        let {className, children} = this.props;
        return (
            <li
                className={`list__element block ${className} b_unselectable`}
                onClick={this.click}
                ref={li => this.DOM = li}
            >
                {children}
            </li>
        );
    }

    /****************************** METHODS SUMMARY ******************************/

    click = () => { console.log(this.props.element.value) };

    reset = () => {
        this.toggle(-1, this.STATE_SELECTED);
        this.toggle(-1, this.STATE_ACTIVE);
        this.toggle(-1, this.STATE_DISABLED);
    };

    // Set appearance for element
    setSelected = (mode=true) => { this.toggle(mode ? 1 : -1, this.STATE_SELECTED) };
    setActive   = (mode=true) => { this.toggle(mode ? 1 : -1, this.STATE_ACTIVE )  };
    setDisabled = (mode=true) => { this.toggle(mode ? 1 : -1, this.STATE_DISABLED) };
    setHidden   = (mode=true) => { this.toggle(mode ? 1 : -1, this.STATE_HIDDEN)   };


    // Toggle classState (on/off) on element
    toggle = (operationCode, classState) => {
        if (this.DOM) {
            let classList = this.DOM.classList;
            switch (operationCode) {
                case 1:
                    classList.add(classState);
                    break;
                case -1:
                    classList.remove(classState);
                    break;
                default:
                    classList.toggle(classState);
                    break;
            }
        }
    }
}

export default Element;