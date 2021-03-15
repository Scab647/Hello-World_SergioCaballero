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

        <div className="grid3">

          <a href="/" className="description">
            <img src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png"style={{width: "60px"}}>
            </img> 
          </a> 

          <a href="/posts/clasicismo" className="card3">
            <h2 className="card3">
              Clasicismo
            </h2> 
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
de quien Joseph Haydn escribió que  «la posteridad  no  vería tal talento 
otra vez en cien años».

       </p>

       <h3 className="description">
       Obras notables (Aunque no lo sepas las has escuchado)
        </h3>

        <h6 className="description">
        *Ave Verum Corpus (1791)
        </h6>

        <h6 className="description">
        *Misa de Réquiem en Re menor (1791)
        </h6>

        <h6 className="description">
        *Sinfonía No. 40 (1788)
        </h6>
    
       <h4 className="description">
       ¿Por qué no escuchas una?
        </h4>

        <div className="card3">
        <iframe width="425" height="344" src="https://www.youtube.com/embed/Dp2SJN4UiE4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
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

    .grid3{
      display:flex;
      align-items:baseline;
      justify-content: left;
      flex-wrap:wrap;
      margin-top: 0rem;
}

h3{
  text-align:justify;
  margin-left: 15rem;
  margin-right: 10rem;
  color: #0f0a03;
  font-size: 20px;
}

h6{
  text-align:justify;
  margin-left: 15rem;
  margin-right: 10rem;
  color: #5e5242;
  font-size: 15px;
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