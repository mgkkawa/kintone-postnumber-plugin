export default (str: string): boolean => !str.match(/^https?:\/\/[\w!?/+\-_~=;.,*&@#$%()'[\]]+/)
