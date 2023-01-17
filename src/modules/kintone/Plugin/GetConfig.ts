import { parse } from '../../'
export default (id: string) => {
  let config = kintone.plugin.app.getConfig(id)

  if (!config) {
    console.log('config:null')
    return null
  }
  for (let key in config) {
    const value = config[key]
    try {
      config[key] = parse(value)
    } catch {
      continue
    }
  }

  return config
}
