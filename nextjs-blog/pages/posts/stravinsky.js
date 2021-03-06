import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function stravinsky() {
  return (
    <div className="container">
        <Head>
        <title>Stravinsky</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>

        <div className="grid3">

        <a href="/" className="description">
          <img src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png"style={{width: "60px"}}>
          </img> 
        </a> 

         <a href="/posts/modernismo" className="card3">
          <h2 className="card3">
              Modernismo
              </h2> 
        </a>      
          
        </div> 

       
        <h1 className="title">
          Ígor Stravinsky
        </h1>

        <div className="grid2">
        <p className="card4">
        Su larga vida  le  permitió  conocer gran variedad de corrientes  musicales. Compuso una  gran   cantidad   de   obras 
clásicas abordando  varios  estilos  como 
el primitivismo, el  neoclasicismo  y  el serialismo, pero es conocido mundialmente sobre todo por tres ballets de uno de sus períodos iniciales. Para muchos, estos ballets clásicos, 
atrevidos e innovadores, prácticamente
reinventaron el género. Stravinski también escribió para  diversos
tipos de conjuntos en un amplio espectro de formas clásicas, desde
óperas y sinfonías a  pequeñas  piezas  para  piano y  obras  para 
grupos de jazz.


       </p>

       <img src="/src/components/stravinsky.jpg">
          </img> 

       </div>
        
    
    
       <h3 className="description">
       Obras notables
        </h3>

        <h6 className="description">
        *El pájaro de fuego (1910)
        </h6>

        <h6 className="description">
        *Petrushka (1911)

        </h6>

        <h6 className="description">
        *La consagración de la primavera (1913)
        </h6>

       <h4 className="description">
       ¿Por qué no escuchas una?
        </h4>

        <div className="card3">
        <iframe width="425" height="344" src="https://www.youtube.com/embed/EkwqPJZe8ms" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
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
      width: 300px;

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