import React, {Component} from 'react';
import logo from './logo.png'
import "./InfoBlock.css"

class InfoBlock extends Component {
    render() {
        let LIVE_SORT_URL    = "https://github.com/martis-boolean/LiveSort";
        let VACANCY_URL      = "https://kazan.hh.ru/vacancy/31829891";
        let LIVE_SORT_ANCHOR = <a href={LIVE_SORT_URL} className="text_main" target="_blank"
                                  rel="noopener noreferrer">LiveSort!</a>;
        return (
            <div className="nav-panel__info-block block_expanded">
                <div className="info-block__top">
                    <h2 className="nav-panel__header header text_fancy">Welcome</h2>
                    <div className="text-block">
                        <p className="text-block__paragraph text">Hello, Guest! This is my&nbsp;{LIVE_SORT_ANCHOR}</p>
                    </div>
                    <div className="text-block">
                        <p className="text-block__paragraph text">Usage is simple:</p>
                        <p className="text-block__paragraph text">— Set amount of elements in test set</p>
                        <p className="text-block__paragraph text">— Generate new elements if needed</p>
                        <p className="text-block__paragraph text">— Select more pleasant view</p>
                        <p className="text-block__paragraph text text_muted">⠀⠀(or do it in process)</p>
                        <p className="text-block__paragraph text">— Run sort</p>
                        <p className="text-block__paragraph text text_muted">⠀⠀(while available only BubbleSort)</p>
                        <p className="text-block__paragraph text">— Look and relax</p>
                    </div>
                </div>
                <div className="info-block__bottom block block_expanded">
                    <a href={VACANCY_URL} rel="noopener noreferrer" target="_blank">
                        <img className="info-block__logo logo" src={logo} alt="Logo"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default InfoBlock;