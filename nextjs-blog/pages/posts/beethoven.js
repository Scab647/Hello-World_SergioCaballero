import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Beethoven() {
  return (
    <div className="container">
        <Head>
        <title>Beethoven</title>
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
          Ludwig Van Beethoven
        </h1>

        <div className="grid2">
        <p className="card4">
        Su legado musical abarca, cronológicamente,
desde el Clasicismo hasta los inicios del 
Romanticismo.  Es  considerado  uno de los 
compositores más importantes de la historia
de la música y su legado ha influido de 
forma decisiva en la evolución 
posterior de este arte.


Su música se expresó en numerosos géneros y 
aunque las sinfonías fueron  la    fuente 
principal de su popularidad internacional, 
su impacto resultó ser principalmente significativo en sus obras 
para piano y música de cámara.



       </p>

       <img src="/src/components/beethoven.jpg">
          </img> 

       </div>
        
       <p className="description">
       En su  prolífica  trayectoria  musical, Beethoven  dejó  para la 
posteridad un importante legado: nueve sinfonías, una ópera, dos 
misas,  tres cantatas,  treinta y  dos sonatas para piano, cinco 
conciertos  para  piano,  un concierto  para  violín, un  triple 
concierto para  violín, violonchelo, piano y orquesta, dieciséis 
cuartetos  de  cuerda,  una  gran fuga  para  cuarteto de cuerda, 
diez sonatas para violín y piano, cinco sonatas para violonchelo
y  piano e innumerables oberturas,  obras de cámara,  series de 
variaciones,  arreglos de  canciones populares y bagatelas  para 
piano.

       </p>

       <h3 className="description">
       Obras notables (Hasta por nombre las conoces)
        </h3>

        <h6 className="description">
        *Sonata 14: Moonlight sonata (1801)

        </h6>

        <h6 className="description">
        *Sinfonía No. 5 (1808)

        </h6>

        <h6 className="description">
        *Sinfonía No. 9: Coral (1824)
        </h6>

        <h6 className="description">
        *Bagatelle en La mayor.: Für Elise (1810)
        </h6>

    
       <h4 className="description">
       ¿Por qué no escuchas una?
        </h4>

        <div className="card3">
        <iframe width="425" height="344" src="https://www.youtube.com/embed/thEJQF8a2-M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
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