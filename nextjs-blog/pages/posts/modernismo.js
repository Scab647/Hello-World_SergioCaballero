import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function Clasicismo() {
  return (
    <div className="container">
        <Head>
        <title>Modernismo</title>
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
          Modernismo
        </h1>

        <p className="description">
        Se refiere a la música de la tradición europea escrita, elaborada 
aproximadamente entre 1910 y 1975. La música  moderna está basada 
en los  valores  filosóficos  y estéticos del  modernismo el cual 
tiene como  principio  principal  la ruptura con  la tradición, y 
la permanente innovación.

       </p>
        
       <p className="description">
       El modernismo musical tiene  tres  características principales que 
lo distinguen de los períodos anteriores:
       </p>

       <p className="description">
       -La expansión o abandono de la tonalidad.
       </p>

       <p className="description">
-El uso de las técnicas extendidas.

       </p>

       <p className="description">
-La incorporación de sonidos y ruidos novedosos en la composición.
       </p>

    
    
       <h4 className="description">
       ¿A qué compositor del modernismo quieres escuchar?
        </h4>

      <div className="grid">
         <a href="/posts/clasicismo" className="card3">
         <h5>STRAVINSKY</h5>
         </a>

         <a href="/posts/romanticismo" className="card3">
         <h5>MESSIAEN</h5>
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