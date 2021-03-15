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
        <h1 className="title">
          Clasicismo
        </h1>

        <p className="description">
        Desarrollado aproximadamente entre 1750 y 1820   por compositores 
como Joseph Haydn, Wolfgang Amadeus Mozart y Ludwig van Beethoven, 
el clasicismo se  caracterizó  por  el  gusto por lo  natural, lo 
equilibrado y lo claro; rechazando del artificio y  el  exceso de 
sofisticación de la música barroca. </p>
        
        </main>
    </div>
  )
}