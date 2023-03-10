export default (num: number | string): string => {
  if (typeof num === 'number') {
    num = num.toString()
  }

  num = num.replace(/[, ]/g, '')

  let prefix = ''

  if (num[0] === '-') {
    num = num.slice(1)
    prefix = '-'
  }

  return (
    prefix +
    num
      .slice(0, -12)
      .replace(/^0+/, '')
      .replace(/([0-9]+)/g, '$1ε') +
    num
      .slice(-12, -8)
      .replace(/^0+/, '')
      .replace(/([0-9]+)/g, '$1ε') +
    num
      .slice(-8, -4)
      .replace(/^0+/, '')
      .replace(/([0-9]+)/g, '$1δΈ') +
    num.substring(num.length - 4).replace(/^0+/, '')
  )
}
