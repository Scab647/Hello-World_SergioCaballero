import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function mahler() {
  return (
    <div className="container">
        <Head>
        <title>Mahler</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>

        <div className="grid3">

        <a href="/" className="description">
          <img src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png"style={{width: "60px"}}>
          </img> 
        </a> 

         <a href="/posts/romanticismo" className="card3">
          <h2 className="card3">
              Romanticismo/Postromanticismo
              </h2> 
        </a>      
          
        </div> 

       
        <h1 className="title">
          Gustav Mahler
        </h1>

        <div className="grid2">
        <p className="card4">
        Gustav Mahler  fue  uno   de  los   más 
importantes  directores de  orquesta  y 
de ópera de su momento.  Posteriormente, 
como compositor  centró sus esfuerzos en 
la forma sinfónica y en el lied. 

Él  mismo  advertía  que  componer  una 
sinfonía  era  «construir un  mundo con
 todos los medios posibles», por lo que
sus   trabajos   en  este   campo    se 
caracterizan  por una amplísima heterogeneidad.



       </p>

       <img src="/src/components/mahler.jpg">
          </img> 

       </div>
        
       <p className="description">
       Sus obras sinfónicas adquirieron desmesuradas proporciones e incluían 
armonías disonantes. La apariencia del desorden que resultaba, con el
esfuerzo extra que demandaba reconocer alguna formalidad «clásica» en 
su estructura, generó la incomprensión de su música,  atrayéndole una 
hostilidad casi general.
       </p>
    
       <h3 className="description">
       Obras notables
        </h3>

        <h6 className="description">
       *Cuarteto para piano (1876)
        </h6>

        <h6 className="description">
        *Sinfonía No. 2: Resurrección (1894)
        </h6>

        <h6 className="description">
        *Sinfonía No. 9  (1909)
        </h6>

       <h4 className="description">
       ¿Por qué no escuchas una?
        </h4>

        <div className="card3">
        <iframe width="425" height="344" src="https://www.youtube.com/embed/hzO2fPBxQTc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
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