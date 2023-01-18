type GetPostCodeAllData = {
  allAddress: string
  city: string
  cityCode: string
  fullWidthKana: {
    allAddress: string
    city: string
    pref: string
    town: string
    generalPostcode: boolean
  }
  halfWidthKana: {
    allAddress: string
    city: string
    pref: string
    town: string
  }
  hiragana: {
    allAddress: string
    city: string
    pref: string
    town: string
  }
  location: {
    latitude: number
    longitude: number
  }
  officePostcode: boolean
  oldPostcode: string
  postcode: string
  pref: string
  prefCode: string
  town: string
}

const URL = 'https://apis.postcode-jp.com/api/v5/postcodes/'
export default async (postcode: string | number): Promise<GetPostCodeAllData | null> => {
  if (typeof postcode === 'number') postcode = '' + postcode
  postcode = postcode.replace(/-/g, '')
  const result = await kintone.proxy(URL, 'GET', { postcode: postcode }, {})
  console.log(result)
  const json: GetPostCodeAllData[] = JSON.parse(result[0])
  return json[0] ? json[0] : null
}
