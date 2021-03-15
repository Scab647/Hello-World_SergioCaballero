import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function tchaikovsky() {
  return (
    <div className="container">
        <Head>
        <title>Tchaikovsky</title>
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
          Pyotr Ilyich Tchaikovsky
        </h1>

        <div className="grid2">
        <p className="card4">
        Es autor de algunas de  las obras de música 
clásica más famosas  del  repertorio actual,
como los ballets  "El  lago  de los cisnes", 
"La  bella  durmiente" y  "El  cascanueces".

A pesar de ser popular  en  todo  el  mundo, 
Tchaikovsky recibió duras  críticas  en  su 
tiempo por parte de críticos y compositores. 
Sin embargo, su reputación como  compositor 
es  hoy  en  día segura, y  ha desaparecido 
por completo  el desdén con el que los críticos occidentales  a 
principios  y  mediados del siglo XX catalogaban su música como 
vulgar y falta de pensamiento.




       </p>

       <img src="/src/components/tchaikovsky.jpg">
          </img> 

       </div>

       <h3 className="description">
       Obras notables
        </h3>

        <h6 className="description">
        *El lago de los cisnes (1877)
        </h6>

        <h6 className="description">
        *Sinfonía No. 6: Patética (1893)

        </h6>

        <h6 className="description">
        *Concierto para piano No. 1 (1875)

        </h6>

        
    
       <h4 className="description">
       ¿Por qué no escuchas una?
        </h4>

        <div className="card3">
        <iframe width="425" height="344" src="https://www.youtube.com/embed/hNfpMRSCFPE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
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