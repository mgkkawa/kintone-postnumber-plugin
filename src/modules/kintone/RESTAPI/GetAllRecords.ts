import { urls } from '.'
const getRecords = async (offset: number = 0, limit: number = 500, opt_records: any = null): Promise<any> => {
  let allRecords = opt_records || []
  const appId: number | null = kintone.app.getId()

  return kintone
    .api(kintone.api.url(urls.records, true), 'GET', {
      app: appId,
      query: `limit ${limit} offset ${offset}`,
    })
    .then(async resp => {
      allRecords = allRecords.concat(resp.records)

      if (resp.records.length === limit) {
        return await getRecords(offset + limit, limit, allRecords)
      }
      return allRecords
    })
    .catch(error => console.error(error))
}

export default getRecords
