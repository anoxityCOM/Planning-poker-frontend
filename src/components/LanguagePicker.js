require('styles/LanguagePicker.css');

import React, { PropTypes } from 'react';

class LanguagePickerComponent extends React.Component {

  static propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  };

  render() {
    return (
      <div id="languagePicker">

      </div>
    );
  }
}

export default LanguagePickerComponent;
