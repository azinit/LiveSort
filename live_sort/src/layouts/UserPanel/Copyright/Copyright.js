import React, {Component} from 'react';

class Copyright extends Component {
    render() {
        return (
            <div className="copyright block">
               <p className="copyright-text subtext">
                   Developed for
                   {/* TODO https://mathiasbynens.github.io/rel-noopener/#hax*/ }
                   <a className="copyright__link" href="https://kazan.hh.ru/employer/67611" target="_blank"> @Tensor</a>
               </p>
            </div>
        );
    }
}

export default Copyright;