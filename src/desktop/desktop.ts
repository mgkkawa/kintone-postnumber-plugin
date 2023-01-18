// You can use the ESModules syntax and @kintone/rest-api-client without additional settings.
// import { KintoneRestAPIClient } from "@kintone/rest-api-client";

import { checkPostCode, events, getAddresses } from '../modules'
import { URL, METHOD } from '../config/env'
const { credit, edit, index } = events
const { show } = index

const DEVELOPER_ID = ['93']
const PLUGIN_ID = kintone.$PLUGIN_ID
const config = kintone.plugin.app.getConfig(PLUGIN_ID)
console.log('郵便番号プラグイン設定')
console.log(config)
// getAddresses('1410031').then(resp => console.log(resp))

// 機能はこれだけでいいと思う
// 設定画面は手を付けていない。
// 設定分岐する？
// CHECK_FIELDの選択時、文字列フィールドだけを選択させる。済
// 処理の記述が不満。

const CHECK_FIELD = config.checkfield
const address = config.resultfield
const ALL_ADDRESS = address
const PREF = address
const CITY = address
const TOWN = address
const HIRAGANA_ALL_ADDRESS = config.kanaAll
const HIRAGANA_PREF = address
const HIRAGANA_CITY = address
const HIRAGANA_TOWN = address
const KATAKANA_ALL_ADDRESS = address
const KATAKANA_PREF = address
const KATAKANA_CITY = address
const KATAKANA_TOWN = address
const HANKAKU_ALL_ADDRESS = address
const HANKAKU_PREF = address
const HANKAKU_CITY = address
const HANKAKU_TOWN = address

// test用。 指定した郵便番号を郵便番号フィールドに開いた瞬間入れているだけ。
// if (DEVELOPER_ID.includes(kintone.getLoginUser().id)) {
//   console.log('isDeveloper')
//   kintone.events.on(show(), event => {
//     event.record[CHECK_FIELD].value = '141-0031'
//     return event
//   })
// }

//test
kintone.events.on(show(), async event => {
  console.log(URL)
  const res = await kintone.proxy(URL + '2230064', METHOD, {}, {})
  const json = JSON.parse(res[0])[0]
  console.log(res)
})

kintone.events.on(edit.show(), async event => {
  const record = event.record
  const { value } = record[CHECK_FIELD]
  if (!value) return

  const addresses = await getAddresses(value)
  console.log(addresses)
  if (!addresses) return event

  // if (ALL_ADDRESS) record[ALL_ADDRESS].value = resp.allAddress
  // if (PREF) record[PREF].value = resp.pref
  // if (CITY) record[CITY].value = resp.city
  // if (TOWN) record[TOWN].value = resp.town
  if (HIRAGANA_ALL_ADDRESS && !record[HIRAGANA_ALL_ADDRESS].value)
    record[HIRAGANA_ALL_ADDRESS].value = addresses.hiragana?.allAddress
  // if (HIRAGANA_PREF) record[HIRAGANA_PREF].value = resp.hiragana.pref
  // if (HIRAGANA_CITY) record[HIRAGANA_CITY].value = resp.hiragana.city
  // if (HIRAGANA_TOWN) record[HIRAGANA_TOWN].value = resp.hiragana.town
  // if (KATAKANA_ALL_ADDRESS) record[KATAKANA_ALL_ADDRESS].value = resp.fullWidthKana.allAddress
  // if (KATAKANA_PREF) record[KATAKANA_PREF].value = resp.fullWidthKana.pref
  // if (KATAKANA_CITY) record[KATAKANA_CITY].value = resp.fullWidthKana.city
  // if (KATAKANA_TOWN) record[KATAKANA_TOWN].value = resp.fullWidthKana.town
  // if (HANKAKU_ALL_ADDRESS) record[HANKAKU_ALL_ADDRESS].value = resp.halfWidthKana.allAddress
  // if (HANKAKU_PREF) record[HANKAKU_PREF].value = resp.halfWidthKana.pref
  // if (HANKAKU_CITY) record[HANKAKU_CITY].value = resp.halfWidthKana.city
  // if (HANKAKU_TOWN) record[HANKAKU_TOWN].value = resp.halfWidthKana.town

  return event
})

kintone.events.on(credit.change(CHECK_FIELD), event => {
  const { field } = event.changes
  field.error = null
  const { value } = field
  if (!value) return event
  if (checkPostCode(value)) {
    field.error = '郵便番号を正しく入力してください。'
    return event
  }
  const postCode = value.replace(/-/g, '')
  field.disabled = true

  getAddresses(postCode).then(resp => {
    if (!resp) return
    const { record } = kintone.app.record.get()
    const field = record[CHECK_FIELD]
    field.value = postCode
    field.disabled = false

    if (ALL_ADDRESS) record[ALL_ADDRESS].value = resp.allAddress
    // if (PREF) record[PREF].value = resp.pref
    // if (CITY) record[CITY].value = resp.city
    // if (TOWN) record[TOWN].value = resp.town
    if (HIRAGANA_ALL_ADDRESS) record[HIRAGANA_ALL_ADDRESS].value = resp.hiragana.allAddress
    // if (HIRAGANA_PREF) record[HIRAGANA_PREF].value = resp.hiragana.pref
    // if (HIRAGANA_CITY) record[HIRAGANA_CITY].value = resp.hiragana.city
    // if (HIRAGANA_TOWN) record[HIRAGANA_TOWN].value = resp.hiragana.town
    // if (KATAKANA_ALL_ADDRESS) record[KATAKANA_ALL_ADDRESS].value = resp.fullWidthKana.allAddress
    // if (KATAKANA_PREF) record[KATAKANA_PREF].value = resp.fullWidthKana.pref
    // if (KATAKANA_CITY) record[KATAKANA_CITY].value = resp.fullWidthKana.city
    // if (KATAKANA_TOWN) record[KATAKANA_TOWN].value = resp.fullWidthKana.town
    // if (HANKAKU_ALL_ADDRESS) record[HANKAKU_ALL_ADDRESS].value = resp.halfWidthKana.allAddress
    // if (HANKAKU_PREF) record[HANKAKU_PREF].value = resp.halfWidthKana.pref
    // if (HANKAKU_CITY) record[HANKAKU_CITY].value = resp.halfWidthKana.city
    // if (HANKAKU_TOWN) record[HANKAKU_TOWN].value = resp.halfWidthKana.town

    kintone.app.record.set({ record: record })
  })

  return event
})
