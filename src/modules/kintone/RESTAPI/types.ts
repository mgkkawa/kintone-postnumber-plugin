export type ResultField = {
  code: string
  defaultValue: string
  expression: string
  hideExpression: boolean
  label: string
  maxLength: string
  minLength: string
  noLabel: boolean
  required: boolean
  type: string
  unique: boolean
}

export type ResultObject = {
  properties: {
    [key: string]: ResultField
  }
  revision: string
}
