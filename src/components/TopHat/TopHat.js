import PropTypes from 'prop-types';
import React, {useEffect} from 'react'

import './styles.scss';

const topHatClass = 'body--with-top-hat';

const TopHat = ({ children }) => {

  useEffect(() => {
    document.body.classList.add(topHatClass);
    return () => document.body.classList.remove(topHatClass);
  });
  return (
    <aside className="top-hat">
      <div className="top-hat__content">
        {children}
      </div>
    </aside>
  );
}

TopHat.propTypes = {
  children: PropTypes.node.isRequired,
}

TopHat.defaultProps = {
  children: ``,
}

export default TopHat;
