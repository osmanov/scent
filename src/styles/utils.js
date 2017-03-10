import { css } from 'styled-components'
import { font, deviceSize } from './constants'

/**
 * it sets remoted font to el when font will be loaded
 * @param el
 * @param group
 */
/* eslint-disable no-param-reassign*/
export function detectFontLoaded(el, group = 'base') {
  const fontRemote = font[group].remote
  if (fontRemote === el.style.fontFamily) return
  const detectorInterval = setInterval(() => {
    const isFontLoaded = document.body.classList.contains('fontLoaded')
    if (isFontLoaded) {
      el.style.fontFamily = fontRemote
      clearInterval(detectorInterval)
    }
  }, 100)
}

export const media = Object.keys(deviceSize).reduce((accumulator, type) => {
  accumulator[type] = (...args) => css`
    @media (max-width: ${deviceSize[type]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})
/* eslint-enable no-param-reassign*/
