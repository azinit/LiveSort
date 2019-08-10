import React, {Component} from 'react';
import logo from '../logo.png'

class TextBlock extends Component {
    render() {
        return (
            <div className="user-panel__text-block block_expanded">
                <div className="text-block__top">
                    <h2 className="user-panel__header header fancy-text">Welcome</h2>
                    <p className="text block">Hello, Guest! This is my LiveSort!</p>

                </div>
                <div className="text-block__bottom block block_expanded">
                    {/*<img className="text-block__logo logo" src={logo} alt="Logo"/>*/}
                </div>
            </div>
        );
    }
}

export default TextBlock;