import React from 'react'

export default ({ text }: { text?: string | undefined }) => {
  text ??= ''
  return <div className='kintoneplugin-label'>{text}</div>
}
