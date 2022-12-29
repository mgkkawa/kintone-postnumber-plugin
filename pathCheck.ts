const path = require('path')

const config = path.resolve(__dirname, 'src', 'config', 'config.tsx')
const desktop = path.resolve(__dirname, 'src', 'desktop', 'desktop.ts')
const mobile = path.resolve(__dirname, 'src', 'mobile', 'mobile.ts')
console.log('config  : ' + config)
console.log('desktop : ' + desktop)
console.log('mobile  : ' + mobile)
