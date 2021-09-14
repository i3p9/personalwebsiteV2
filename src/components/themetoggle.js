import React from 'react'
import useDarkMode from 'use-dark-mode'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
      <a href="#" onClick={darkMode.toggle}>{ darkMode.value ? 'ya' : 'no' }</a>
    // <div>
    //   <Toggle
    //     defaultChecked={darkMode.value}
    //     aria-label='No label tag'
    //     onChange={darkMode.toggle} />
    // </div>

  );
};

export default DarkModeToggle
