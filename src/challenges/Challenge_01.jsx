/** @format */

import React, { useEffect, useState } from 'react'

const getPalabrasUnicas = (texto) => {
  const palabras = texto.split('\n')
  const palabrasUnicas = [...new Set(palabras)]

  return palabrasUnicas
}

const getCoincidencias = (texto, palabra) => {
  const regex = new RegExp(`\\b${palabra}\\b`, 'g')
  const matches = texto.match(regex)
  return matches.length
}

const Challenge_01 = () => {
  const [texto, setTexto] = useState('')

  useEffect(() => {
    const importarTexto = async () => {
      try {
        const response = await fetch('/public/data/message_01.txt')
        const data = await response.text()
        setTexto(data.toLowerCase().replace(/\s/g, '\n'))
      } catch (error) {
        console.error('Error al importar el archivo:', error)
      }
    }
    importarTexto()
  }, [])

  return (
    <>
      <h2>Challenge 01</h2>
      {texto && (
        <>
          <div className='card'>
            <h3>Palabras únicas ordenadas</h3>
            <p style={{ width: '800px' }}>
              {getPalabrasUnicas(texto).map((palabra, index) => (
                <span key={index}>
                  {palabra}
                  {getCoincidencias(texto, palabra)}
                </span>
              ))}
            </p>
          </div>
        </>
      )}
    </>
  )
}

export default Challenge_01
