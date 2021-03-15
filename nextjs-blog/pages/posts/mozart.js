import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Mozart() {
  return (
    <div className="container">
        <Head>
        <title>Mozart</title>
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
          Wolfgang Amadeus Mozart
        </h1>

        <div className="grid2">
        <p className="card4">
        La obra mozartiana abarca todos los géneros 
musicales de su   época  incluye    más  de 
seiscientas creaciones. Mozart siempre aprendía vorazmente de otros 
músicos y desarrolló  un  esplendor  y  una 
madurez de estilo que abarcó desde la luz y 
la elegancia, a la oscuridad y la pasión. Todo bien fundado por una visión de la 
humanidad «redimida por el arte, perdonada y 
reconciliada con la naturaleza y lo absoluto»


       </p>

       <img src="/src/components/mozart.jpg">
          </img> 

       </div>
        
       <p className="description">
       Su influencia en toda la música occidental posterior es profunda; Ludwig 
van Beethoven escribió sus primeras composiciones a la sombra  de Mozart, 
de quien Joseph Haydn escribió que  «la posteridad  no  verá tal talento 
otra vez en cien años».

       </p>
    
       <h4 className="description">
       ¿Por qué no escuchas una?
        </h4>

        <div className="'description'">
          <video src="https://www.youtube.com/watch?v=Dp2SJN4UiE4&ab_channel=FranceMusique">
          </video> 
        </div>

       <style jsx>{`
    p{
      text-align:justify;
      margin-left: 5rem;
      margin-right: 5rem;
      color: #0f0a03;
    }

    img{
      padding: 5px;
      width: 200px;

    }

    .img2{
      padding: 5px;
      width: 10px;

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