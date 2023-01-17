import React from 'react'

const TextBox = ({ value, stateFunction }: { value?: string; stateFunction: Function }) => {
  return (
    <div className='kintoneplugin-input-outer'>
      <input
        type='text'
        className='kintoneplugin-input-text'
        defaultValue={value}
        style={{ marginRight: 10 }}
        onChange={e => stateFunction(e.target.value)}
      />
    </div>
  )
}

export default TextBox
