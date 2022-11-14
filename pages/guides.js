import { useEffect, useState } from 'react'
import styles from '../styles/Guides.module.css'
import AuthContext from '../stores/authContext'
import { useContext } from 'react';

export default function Guides() {
  const { user, authReady } = useContext(AuthContext)
  const [guides, setGuides] = useState(null)
  const [error, setError] = useState(null)
  // busco la respuesta del localhost 8888, estoyusando funciones
  // la funcion devuelve archivo json  y luego imprimo data
  // ojo data está en archivo verification linea 6
  useEffect(() => {
    if (authReady){
      fetch('/.netlify/functions/guides', user && {
        headers: {
          Authorization:  'Bearer ' + user.token.access_token
        }
      })
      .then(res => {
        if (!res.ok) {
          login()
          throw Error('You must be logged in to view this content')
        }
        return res.json()
      })
      .then(data => {
        setError(null)
        setGuides(data)
      })
      .catch(err => {
        setError(err.message)
        setGuides(null)
      })
    
    }
  },[user, authReady])

  return (
    <div className={styles.guides}>
      
      {!authReady && <div>Cargando...</div>}

      {error && (
        <div className={styles.error}>
          <p>{ error }</p>
        </div>
      )}

      {guides && guides.map(guide => (
        <div key={guide.title} className={styles.card}>
          <h3>{ guide.title }</h3>
          <h4>written by {guide.author}</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At corrupti iste ab magnam dignissimos id maxime rerum quae minima. Delectus maxime culpa est consequatur veritatis, perspiciatis cum corrupti possimus quis?</p>
        </div>
      ))}

    </div>  
  )
}