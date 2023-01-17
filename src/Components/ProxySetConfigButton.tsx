import React from 'react'
import swal from 'sweetalert2'

const ProxySetConfigButton = ({
  url,
  method = 'GET',
  headers = {},
}: {
  url: string
  method?: string
  headers?: any
}) => {
  return (
    <button
      type='button'
      className='kintoneplugin-button-dialog-ok'
      onClick={(e: React.FormEvent) => {
        e.preventDefault()
        console.log(url)
        console.log(method)
        console.log(headers)
        kintone.plugin.app.setProxyConfig(url, method, headers, {}, () =>
          console.log(kintone.plugin.app.getProxyConfig(url, method)),
        )
      }}>
      API情報保存
    </button>
  )
}

export default ProxySetConfigButton
