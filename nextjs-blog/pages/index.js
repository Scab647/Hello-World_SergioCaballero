import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      

      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main>
        <h1 className="title">
          Música Clásica
        </h1>

        <div className="grid">
         <a href="/posts/clasicismo" className="card">
         <h2>Clasicismo</h2>
         </a>

         <a href="/posts/romanticismo" className="card2">
         <h2>Romanticismo/Postromanticismo</h2>
         </a>

         <a href="/posts/modernismo" className="card">
         <h2>Modernismo</h2>
         </a>
        </div>
        
        <h3 className="description">
        ¿Qué es Música clásica?
        </h3>

        <p className="description">
        En el sentido popular se le llama música clásica a la música de tradición culta. Ésta difiere de la música actual 
por ser enteramente acústica y matemáticamente rigurosa. </p>

        <p className="description">
Como todo aspecto artístico cultural, existen muchas diferencias entre periodos temporales, por lo que este sitio
explorará un poco en la historia de la música clásica y la de algunos de sus principales exponentes. 
        </p>
      
      <div className="grid">
      <img src="src/components/efe violin.png"></img>

        <h4 className="description">
        ¡EXPLORA LA MÚSICA CLÁSICA!
        </h4>

        <img src="src/components/efe violin2.png">
          
        </img>  
      </div>
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
