import React, { useEffect, useState } from 'react'
import {
  DropDown,
  DropDownList,
  FormCheckBox,
  FormDescription,
  FormEndRow,
  FormLabel,
  FormRow,
  ProxySetConfigButton,
  TextBox,
} from '../Components'
import { getConfig, getSingleStringFields, getAddresses } from '../modules'
import { env } from '.'

type ConfigObject = {
  checkfield: string
  resultfield: string
  kanaAll: string
  isAddConfig?: boolean
}

const pluginConfig: ConfigObject = getConfig(kintone.$PLUGIN_ID)

const App = () => {
  const { DEFAULT_FIELDS, URL, METHOD } = env
  const proxyConfig = kintone.plugin.app.getProxyConfig(URL, METHOD)
  console.log(proxyConfig)

  const headers = proxyConfig ? proxyConfig.headers : { apiKey: '' }
  const [apiKey, setApiKey] = useState(headers.apiKey)
  const [config, setConfig] = useState<ConfigObject>(pluginConfig)
  const [fields, setFields] = useState<DropDownList[]>(DEFAULT_FIELDS)
  const [requiredField, setRequiredField] = useState<string>(config.checkfield || '')
  const [resultField, setResultField] = useState<string>(config.resultfield || '')
  const [kanaAll, setKanaAll] = useState<string>(config.kanaAll || '')

  useEffect(() => {
    getSingleStringFields().then(resp => {
      setFields(DEFAULT_FIELDS.concat(resp))
    })
  }, [])

  useEffect(() => {
    config.checkfield = requiredField
    config.resultfield = resultField
    config.kanaAll = kanaAll
    delete config.isAddConfig
    setConfig(config)
  }, [requiredField, resultField, kanaAll])

  return (
    <>
      <FormLabel text='郵便番号プラグイン' />
      <FormDescription text='郵便番号を検索して必要な値をフィールドに転記するプラグイン' />
      <FormRow />
      <FormDescription text='PostCodeJP API key' />
      <TextBox value={apiKey} stateFunction={setApiKey} />
      <ProxySetConfigButton
        url={URL}
        method={METHOD}
        headers={{
          // 'Content-Type': 'application/json',
          'apiKey': apiKey,
        }}
      />
      <FormRow />
      <DropDown value={requiredField} label={'郵便番号フィールド'} list={fields} stateFunction={setRequiredField} />
      <DropDown value={resultField} label={'結果出力フィールド'} list={fields} stateFunction={setResultField} />
      <FormRow />
      <FormCheckBox
        label={'拡張機能を利用する。'}
        name={''}
        checked={!!config.kanaAll}
        childrens={[
          <DropDown value={kanaAll} label={'よみがな住所フィールド'} list={fields} stateFunction={setKanaAll} />,
        ]}
        id={'use-expanded'}
      />
      <FormRow />
      <br />
      <FormEndRow config={config} />
    </>
  )
}

export default App
