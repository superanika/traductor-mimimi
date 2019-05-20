import React from 'react';
import './MIMIMITranslator.scss';
import girl from '../repelente.png';

class MIMIMITranslator extends React.Component {
    render() {
        return (
            <div className="container">
                <img src={girl} alt="girl" className="girl"/>
                <div className={(this.props.mimimi !== '') ? 'bocadillo' : 'bocadillo hidden' }>
                    <p className='translation'>{this.props.mimimi}</p>
                </div>
            </div>
        );
    }
}
export default MIMIMITranslator;