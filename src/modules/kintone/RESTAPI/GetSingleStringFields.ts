import { urls, SINGLE_LINE_TEXT } from '.'
import { ResultField, ResultObject } from './types'

export const getSingleStringFields = async (): Promise<ResultField[]> => {
  const params = { app: kintone.app.getId() }
  const result: ResultObject = await kintone.api(kintone.api.url(urls.fields, true), 'GET', params)
  const properties = result.properties
  const keys = Object.keys(properties)
  const filters = keys.filter(key => {
    const field = properties[key]
    const type = field.type
    return type === SINGLE_LINE_TEXT
  })

  return filters.map(key => properties[key])
}
