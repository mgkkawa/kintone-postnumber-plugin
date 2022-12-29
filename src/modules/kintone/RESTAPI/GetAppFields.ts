import { urls, DELETE_FIELDS } from '.'
import { ResultField, ResultObject } from './types'

export const getAppFields = async (): Promise<ResultField[]> => {
  const params = { app: kintone.app.getId() }
  const result: ResultObject = await kintone.api(kintone.api.url(urls.fields, true), 'GET', params)
  const properties = result.properties
  const keys = Object.keys(properties)
  const filters = keys.filter(key => {
    const field = properties[key]
    const type = field.type
    return !DELETE_FIELDS.includes(type)
  })

  return filters.map(key => properties[key])
}
