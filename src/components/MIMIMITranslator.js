import React from 'react';
import './MIMIMITranslator.scss';

class MIMIMITranslator extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="girl"></div>
                <div className={(this.props.mimimi !== '') ? 'bocadillo' : 'bocadillo hidden' }>
                    <p className='translation'>{this.props.mimimi}</p>
                </div>
            </div>
        );
    }
}
export default MIMIMITranslator;