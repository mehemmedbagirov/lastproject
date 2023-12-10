import React from 'react'
import "./LanguageSelectors.scss"

function LanguageSelectors({onLanguageChange}) {
    const handleLanguageSelect = (e) => {
        const selectedLocale = e.target.value;
        onLanguageChange(selectedLocale);
      };
    
      return (
        <select className='lang' onChange={handleLanguageSelect}>
          <option value="en">En</option>
          <option value="Az">Az</option>
          {/* Add more language options */}
        </select>
      );
}

export default LanguageSelectors