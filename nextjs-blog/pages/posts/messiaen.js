import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function messiaen() {
  return (
    <div className="container">
        <Head>
        <title>Messiaen</title>
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
          Olivier Messiaen
        </h1>

        <div className="grid2">
        <p className="card4">
        Uno de los músicos más  destacados  de  toda 
la centuria.  Tanto  su  fascinación  por el 
hinduismo, su  admiración por  la naturaleza 
y los pájaros, su profunda fe cristiana y su 
amor  por  el  color   instrumental,  fueron 
primordiales para  su formación como artista.


En 1940, en la batalla de Francia, Messiaen 
fue  hecho prisionero de guerra, y mientras 
estaba  encarcelado compuso su Quatuor pour 
la fin  du temps  (Cuarteto para el fin del 
tiempo) para los cuatro instrumentos disponibles allí: piano, violín,
violonchelo  y  clarinete. La  obra  fue estrenada por Messiaen y sus
amigos prisioneros ante una audiencia de prisioneros y vigilantes.


       </p>

       <img src="/src/components/messiaen.jpg">
          </img> 

       </div>
        
       <p className="description">
       La música de Messiaen es rítmicamente compleja (él estaba interesado 
en los ritmos de la antigua Grecia y de orígenes hindúes), y se basa
armónica y melódicamente  en  los modos  de  transposición  limitada, 
que fueron una innovación propia de Messiaen. 

       </p>
    
       <h3 className="description">
       Obras notables
        </h3>

        <h6 className="description">
        *Cuarteto para el fin de los tiempos (1941)

        </h6>

        <h6 className="description">
        *San Francisco de Asís (1983)


        </h6>


       <h4 className="description">
       ¿Por qué no escuchas una?
        </h4>

        <div className="card3">
        <iframe width="425" height="344" src="https://www.youtube.com/embed/q9L5p_-w4CI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
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