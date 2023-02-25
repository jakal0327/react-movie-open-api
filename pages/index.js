import styles from '@/styles/Home.module.css'
import Movie from './movie'
import Layout from './component/layout'

export default function Home() {
  return (
    <>
      <Layout>
        <main >
          <Movie/>
        </main>
      </Layout>
    </>
  )
}
