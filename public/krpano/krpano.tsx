/* eslint-disable padding-line-between-statements */
// import { register } from 'node:module'
import { useEffect } from 'react'

const KrpanoViewer = () => {
  useEffect(() => {
    // Kiểm tra xem window có tồn tại (đảm bảo chỉ chạy phía client)
    if (typeof window !== 'undefined') {
      const krpanoScript = document.createElement('script')
      krpanoScript.src = '/krpano/krpano1.js' // Đường dẫn tới file krpano.js
      krpanoScript.onload = () => {
        // Khi script đã load, khởi tạo krpano
        if (window.embedpano) {
          window.embedpano({
            swf: '/krpano/krpano1.swf',
            xml: '/krpano/examples/combobox/combobox-examples.xml', // Cấu hình xml của bạn
            target: 'krpanoContainer', // ID của div sẽ chứa panorama
            mobilescale: 1.0,
            passQueryParameters: true
          })
        } else {
          console.error('Krpano is not available.')
        }
      }
      krpanoScript.onerror = () => {
        console.error('Failed to load krpano.js')
      }
      document.body.appendChild(krpanoScript)

      // Dọn dẹp khi component unmount
      return () => {
        document.body.removeChild(krpanoScript)
      }
    }
  }, [])

  return <div id='krpanoContainer' style={{ width: '100%', height: '100vh' }} />
}

export default KrpanoViewer
