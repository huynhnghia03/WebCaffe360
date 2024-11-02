'use client'
/* eslint-disable padding-line-between-statements */
import { useEffect } from 'react'

// Extend window object to declare removepano

const KrpanoViewer = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if krpano script is already loaded
      if (!document.querySelector('script[src="/krpano/krpano.js"]')) {
        const krpanoScript = document.createElement('script')
        krpanoScript.src = '/krpano/krpano.js' // Ensure this path is correct

        krpanoScript.onload = () => {
          if (window.embedpano) {
            console.log('Initializing krpano...')
            window.embedpano({
              swf: '/krpano/krpano.swf', // Make sure the path is correct
              xml: '/krpano/examples/snowMountainNoMap/tourNoMaps.xml', // Check path
              target: 'krpanoContainer',
              mobilescale: 1.0,
              passQueryParameters: true,
              onready: (krpanoInterface: any) => {
                console.log('Krpano ready', krpanoInterface)
              }
            })
          } else {
            console.error('Krpano is not available.')
          }
        }

        krpanoScript.onerror = () => {
          console.error('Failed to load krpano.js')
        }

        document.body.appendChild(krpanoScript)
      } else {
        // Script already loaded, just initialize krpano
        if (window.embedpano) {
          window.embedpano({
            swf: '/krpano/krpano.swf',
            xml: '/krpano/examples/tour.xml',
            target: 'krpanoContainer',
            mobilescale: 1.0,
            passQueryParameters: true,
            onready: (krpanoInterface: any) => {
              console.log('Krpano ready', krpanoInterface)
            }
          })
        }
      }

      // Cleanup
      return () => {
        if (window.removepano && document.getElementById('krpanoContainer')) {
          window.removepano('krpanoContainer') // Remove the krpano instance
        }
      }
    }
  }, [])

  return <div id='krpanoContainer' style={{ width: '100%', height: '100vh' }} />
}

export default KrpanoViewer
