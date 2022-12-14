import Head from 'next/head'
import Intro from '../components/Intro/Intro'
import Nav from '../components/Nav/Nav'
import Data from '../data/Data'
import useToggler from '../hooks/useToggler'

export default function Home() {
  const [isShown, toggleMenu] = useToggler(false)
  return (
    <>
      <Head>
        <title>Snap | Intro Section</title>
        <meta name="intro section" content="frontend challenge - intro section" />
      </Head>

      <div className={`h-screen sm:h-full py-1 ${isShown ? "bg-neutral/80 lg:bg-inherit" : ""}`}>
        <header>
          <Nav 
            nav={Data.nav} 
            isShown={isShown} 
            toggleMenu={toggleMenu} 
          />
        </header>
        <main>
          <Intro intro={Data.intro} />
        </main>
      </div>
      
    </>
  )
}
