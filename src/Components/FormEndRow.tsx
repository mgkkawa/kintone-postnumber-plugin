import React, { useEffect, useState } from 'react'
import swal from 'sweetalert2'

const FormEndRow = ({ config }: { config: any }) => {
  const [Config, setConfig] = useState(config)
  useEffect(() => setConfig(config), [config])

  return (
    <div className='kintoneplugin-row'>
      <button
        type='button'
        className='kintoneplugin-button-dialog-cancel'
        onClick={() => {
          const url = window.location.href
          const backPage = url.replace(/config\?.*/, '#/')
          window.location.href = backPage
        }}>
        キャンセル
      </button>
      <button
        type='button'
        className='kintoneplugin-button-dialog-ok'
        onClick={(e: React.FormEvent) => {
          e.preventDefault()
          const url = window.location.href
          const appId = '' + kintone.app.getId()
          const reg = new RegExp(appId + '//*')
          const urlMatch = url.match(reg)
          const urlSlice = url.slice(urlMatch?.index)
          const backPage = url.replace(urlSlice, 'flow?app=' + appId + '#section=settings')
          kintone.plugin.app.setConfig(Config, async () => {
            await swal.fire({
              text: '設定を保存しました。アプリ設定の更新を忘れずに。',
            })
            window.location.href = backPage
          })
        }}>
        保存
      </button>
    </div>
  )
}

export default FormEndRow
