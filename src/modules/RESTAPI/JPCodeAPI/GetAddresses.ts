import { BASE_URL, POST_CODES } from './.env'
const REQUEST_URL = (postcode: string): string => BASE_URL + POST_CODES + postcode //+ '?fields=allAddress' //,location

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
export default async (postcode: string | number): Promise<GetPostCodeAllData> => {
  if (typeof postcode === 'number') postcode = '' + postcode
  postcode = postcode.replace(/-/g, '')
  const fetchResult = await fetch(REQUEST_URL(postcode))
  const json: GetPostCodeAllData[] = await fetchResult.json()
  return json[0]
}
