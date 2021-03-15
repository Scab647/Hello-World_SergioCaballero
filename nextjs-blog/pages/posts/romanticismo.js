import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function romanticismo() {
  return (
    <div className="container">
        <Head>
        <title>Romanticismo</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>

        <div className="description">

        <a href="/" className="description">
          <img src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png">
          </img> 
        </a>     
          
        </div> 

        <h1 className="title">
          Romanticismo/Postromanticismo
        </h1>

        <p className="description">
        El romanticismo musical, inmortalizado por Tchaikovsky, se caracterizó por la reevaluación de la
música instrumental. Ésta pasó a ser pensada como arte  autónomo 
capaz de expresar lo inexpresable.  El compositor  comenzó a ser 
visto como el genio intermediario entre  la audiencia y el mundo
espiritual  al  que daba acceso cada obra musical.  Por ende, el 
carácter  sentimental y  expresivo  de  la  música se hizo mucho 
más evidente.

       </p>
        
       <p className="description">
       Su consecuencia directa, el Postromanticismo, personificado por el compositor alemán Gustav Mahler, no fue más que una 
prolongación  del   Romanticismo,  donde  las  reglas  musicales 
comenzaron  a  ser  moldeadas  a   placer  de  los  compositores, 
impulsados  por   las  ideas   filosóficas   de Nietszche  y  el 
nacionalismo alemán. 


       </p>

    
       <h4 className="description">
       ¿Qué te atrajo más?
        </h4>

      <div className="grid">
         <a href="/posts/tchaikovsky" className="card3">
         <h5>TCHAIKOVSKY</h5>
         </a>

         <a href="/posts/mahler" className="card3">
         <h5>MAHLER</h5>
         </a>
        </div>

       <style jsx>{`
    p{
      text-align:justify;
      margin-left: 10rem;
      margin-right: 10rem;
      color: #0f0a03;
    }

    img{
      padding: 5px;
      width: 50px;
    }

    
`}</style>
        </main>
        <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}