import React, { useEffect, useState } from 'react'
import { DropDown, DropDownList, FormCheckBox, FormDescription, FormLabel, FormRow } from '../Components'
import { getSingleStringFields, ResultField } from '../modules'
import { env } from '.'

const App = () => {
  console.log(env)
  const { DEFAULT_FIELDS } = env
  const [fields, setFields] = useState<DropDownList[]>(DEFAULT_FIELDS)
  const [selectedField, setSelectedField] = useState<string[]>()
  const [requiredField, setRequiredField] = useState<string>('')

  useEffect(() => {
    getSingleStringFields().then(resp => {
      setFields(DEFAULT_FIELDS.concat(resp))
    })
  }, [])

  return (
    <>
      <FormLabel text='郵便番号プラグイン' />
      <FormDescription text='郵便番号を検索して必要な値をフィールドに転記するプラグイン' />
      <FormRow />
      <DropDown value={requiredField} label={'郵便番号フィールド'} list={fields} stateFunction={setRequiredField} />
      <FormCheckBox label={''} name={''} checked={false} childrens={[]} id={''} />
    </>
  )
}

export default App
