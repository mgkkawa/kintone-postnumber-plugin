import React, { useEffect, useState } from 'react'

const FormEndRow = ({ config }: { config: any }) => {
  const [Config, setConfig] = useState(config)
  useEffect(() => setConfig(config), [config])

  return (
    <div className='kintoneplugin-row'>
      <button
        className='kintoneplugin-button-dialog-cancel'
        onClick={() => {
          window.location.href = '../../' + kintone.app.getId() + '/plugin/'
        }}>
        キャンセル
      </button>
      <button
        className='kintoneplugin-button-dialog-ok'
        onClick={(e: React.FormEvent) => {
          e.preventDefault()
          kintone.plugin.app.setConfig(Config)
        }}>
        保存
      </button>
    </div>
  )
}

export default FormEndRow
