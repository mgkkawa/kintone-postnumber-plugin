export default (str: string): boolean => !str.match(/^0[-0-9]{9,12}$/)
