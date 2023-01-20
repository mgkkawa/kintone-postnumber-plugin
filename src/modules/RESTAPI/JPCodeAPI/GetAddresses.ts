import { URL } from './.env'

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

export default async (postcode: string | number) => {
  //:Promise<GetPostCodeAllData | null>
  if (typeof postcode === 'number') postcode = '' + postcode
  postcode = postcode.replace(/-/g, '')
  console.log(postcode)

  const result = await kintone.proxy(URL + postcode, 'GET', { apiKey: 'f0fY3HAEwst70J5sEAOmjPyB3bEM6plPnFGK3b9' }, {})

  console.log(result)

  // const json: GetPostCodeAllData[] = JSON.parse(result[0])
  // console.log(json)
  // return json[0] ? json[0] : null
}
