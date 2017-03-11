import React from 'react'
import Media from 'react-media'

import {deviceSize} from 'styles/constants'
import DesktopView from './DesktopView'
import MobileView from './MobileView'
import styled from 'styled-components'
import { media } from 'styles/utils'

const Wrapper=styled.div`
    margin-top:40px;
   ${media.mobile`
    margin-top:30px;
  `}
`

class HomeView extends React.Component {
  submit = data => {
    alert('SUCCESS')
    return console.log(data)
  }

  render() {
    return (
      <Wrapper>
        <Media query={{ maxWidth: deviceSize.mobile }}>
          {isMobile => isMobile ? (
            <MobileView onSubmit={this.submit}/>
          ) : (
            <DesktopView onSubmit={this.submit}/>
          )}
        </Media>
      </Wrapper>
    );
  }
}

export default HomeView;

