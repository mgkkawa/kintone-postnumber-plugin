export default (config: any) => {
  for (let key in config) {
    const value = config[key]
    try {
      config[key] = JSON.stringify(value)
    } catch {
      config[key] = String(value)
    }
  }

  return config
}
