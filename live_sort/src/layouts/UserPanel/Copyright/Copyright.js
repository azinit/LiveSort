import React, {Component} from 'react';

class Copyright extends Component {
    render() {
        const COMPANY_URL = "https://kazan.hh.ru/employer/67611";
        return (
            <div className="copyright block">
               <p className="copyright-text subtext">
                   Developed for&nbsp;
                   <a className="copyright__link" href={COMPANY_URL}
                       target="_blank" rel="noopener noreferrer"
                   >@Tensor</a>
               </p>
            </div>
        );
    }
}

export default Copyright;