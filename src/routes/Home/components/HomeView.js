import React from 'react'
import Media from 'react-media'

import {deviceSize} from 'styles/constants'
import DesktopView from './DesktopView'
import MobileView from './MobileView'


export const HomeView = () => (
    <Media query={{ maxWidth: deviceSize.mobile }}>
      {isMobile => isMobile ? (
        <MobileView/>
      ) : (
        <DesktopView/>
      )}
    </Media>
)

export default HomeView
