import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Clasicismo() {
  return (
    <div className="container">
        <Head>
        <title>Clasicismo</title>
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
          Clasicismo
        </h1>

        <p className="description">
        Desarrollado aproximadamente entre 1750 y 1820   por compositores 
como Joseph Haydn, Wolfgang Amadeus Mozart y Ludwig van Beethoven, 
el clasicismo se  caracterizó  por  el  gusto por lo  natural, lo 
equilibrado y lo claro; rechazando del artificio y  el  exceso de 
sofisticación de la música barroca.
       </p>
        
       <p className="description">
       Si lo escuchas cuidadosamente  puedes  encontrar una imitación  de 
la naturaleza, en forma de estructuras simples y frases simétricas
similares a las  de  la  música  folclórica, y,  especialmente una 
integración íntima del drama y la música.
       </p>
    
       <h4 className="description">
       ¿A qué compositor del clasicismo quieres escuchar?
        </h4>

      <div className="grid">
         <a href="/posts/clasicismo" className="card3">
         <h5>MOZART</h5>
         </a>

         <a href="/posts/romanticismo" className="card3">
         <h5>BEETHOVEN</h5>
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

    }
`}</style>
        </main>
    </div>
  )
}