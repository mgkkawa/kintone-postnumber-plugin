import React, { useState } from 'react'

const FormCheckBox = ({
  name,
  label,
  checked,
  childrens,
  id,
}: {
  label: string
  name: string
  checked: boolean
  childrens: React.ReactNode[]
  id: string
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <div className='kintoneplugin-input-checkbox'>
      <span className='kintoneplugin-input-checkbox-item' key={name}>
        <input
          type='checkbox'
          name={name}
          value={label}
          id={id}
          defaultChecked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label htmlFor={id}>{label}</label>
      </span>
      {isChecked ? (
        childrens.map((children, index) => <React.Fragment key={id + index}>{children}</React.Fragment>)
      ) : (
        <React.Fragment />
      )}
    </div>
  )
}

export default FormCheckBox
