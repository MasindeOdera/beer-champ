import React from 'react';
import './styles.scss';
import Beer from '../../image/beer.png';

const Header = (props) => {
    return (
        <header data-test="headerComponent">
		   <div className="wrap">
            <div className="logo">
                <img data-test="logoIMG" src={Beer} alt="Logo" />
			</div>
           </div>
        </header>
    )
}

export default Header;