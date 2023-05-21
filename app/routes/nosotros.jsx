import styles from '~/styles/index.css'

export function meta() {
  return {
    title: 'Nova Odonto - Nosotros',
    description: 'Nova Odonto - Nosotros'
  }
}

export function links() {
    return [
        {
            rel  : 'stylesheet',
            href : styles
        }
    ]
}

const nosotros = () => {

  return (
    <div  className="container nosotros">
      
    </div>
  )
}

export default nosotros