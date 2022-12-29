export default (string: string): boolean => string == '000-0000' || !string.match(/^[0-9]{3}-?[0-9]{4}$/)
