import React from 'react'
import { useRouter } from 'next/router'
import { apiConfig } from '../config';
import ms from '@/styles/Movie.module.css'
import Layout from './component/layout';

const Detail = () => {
  const router = useRouter();
  return (
    <Layout>
        <div 
            className={ms.detail} 
            style={{background:`url(${apiConfig.smallImg( router.query.backdrop_path )}) 0 0/cover no-repeat`}}>
            <article>
                <h2>{router.query.title}</h2>
                <ul>
                    <li>{router.query.overview}</li>
                    <li>평점:{router.query.vote_average}</li>
                    <li><img width={400} height={300} src={apiConfig.smallImg( router.query.poster_path )}  alt={router.query.title}/></li>
                </ul>
            </article>
        </div>
    </Layout>
  )
}
export default Detail