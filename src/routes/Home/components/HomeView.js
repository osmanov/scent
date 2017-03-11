import React from 'react'
import Media from 'react-media'

import {deviceSize} from 'styles/constants'
import DesktopView from './DesktopView'
import MobileView from './MobileView'

class HomeView extends React.Component {
  submit = data => {
    alert('SUCCESS')
    return console.log(data)
  }

  render() {
    return (
      <Media query={{ maxWidth: deviceSize.mobile }}>
        {isMobile => isMobile ? (
          <MobileView onSubmit={this.submit}/>
        ) : (
          <DesktopView onSubmit={this.submit}/>
        )}
      </Media>
    );
  }
}

export default HomeView;

