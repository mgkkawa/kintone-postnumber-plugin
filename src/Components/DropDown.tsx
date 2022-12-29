import React from 'react'
import { DropDownList } from '.'

export default ({
  value,
  label,
  list,
  stateFunction,
}: {
  value: string | number
  label: string
  list: DropDownList[]
  stateFunction: Function
}) => {
  return (
    <div className='kintoneplugin-select-outer'>
      <div className='kintoneplugin-title'>{label}</div>
      <div className='kintoneplugin-select'>
        <select
          value={value}
          onChange={e => {
            stateFunction(e.target.value)
          }}>
          {list.map((field, index) => (
            <option label={field.label} value={field.code} key={field.code + index} />
          ))}
        </select>
      </div>
    </div>
  )
}
