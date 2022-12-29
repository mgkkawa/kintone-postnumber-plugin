import React from 'react'

const FormDescription = ({ text }: { text: string }) => {
  const texts = text.split('\n').map((item, index) => {
    // <></> は key を設定できないので、<React.Fragment /> を使う
    return (
      <div className='kintoneplugin-desc-header' key={index}>
        {item}
        <br />
      </div>
    )
  })
  return <div>{texts}</div>
}

export default FormDescription
