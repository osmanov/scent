/* FONT*/
const fontSansName = 'Roboto' // remote font
const fontSansDefault = "Arial, sans-serif" // default browser sans font
const fontSans = `'${fontSansName}', ${fontSansDefault}`


export const font = {
  sans: {
    name: fontSansName,
    remote: fontSans,
    local: fontSansDefault
  },
  base: {
    name: fontSansName,
    remote: fontSansName,
    local: fontSansDefault,
    size: {
      desktop: 16,
      laptop: 15,
      tablet: 14,
      phone: 13.5,
    },
  },
}

/* DEVICE SIZE IN PX*/
export const deviceSize = {
  phone: 640,
}

/* COLORS*/
// for colour names I use http://chir.ag/projects/name-that-color/#FF0000
export const color = {
  black: '#000000',
  alto:'#D8D8D8',
  doveGray:'#666666',
  red: '#FF0000',
  bittersweet:'#FD6464',
  wildStrawberry:'#FF408E'
}


export const height = {
  button: '32px', // Button Height -- controls how "tall" are buttons and form elements ( via line height )
}
