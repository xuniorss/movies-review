import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { Title } from '../components/Title'
import styles from '../styles/home.module.scss'
import logo from '../../public/images/logo.png'
import { api } from '../services/api'
import { useState } from 'react'

type Trands = {    
    id: string
    title: string
    poster_path: string
    overview: string
    media_type: string
}

interface TrandProps {
    trands: Trands[]
    url_img: string
}

export default function Home({ trands, url_img }: TrandProps) {
    const [trand, setTrand] = useState<Trands[]>(trands.slice(0, 8))




    return (
        <>
            <Head><title>Movies review - Trends</title></Head>
            <div className={styles.container}>
                <Title>Trands</Title>
                <div className={styles.content}>
                    {trand.map(item => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <Image height={368} width={288} src={url_img+item.poster_path} alt='poster' />
                                <span className={styles.badge}>{item.media_type}</span>
                            </div>
                            <div className={styles.cardFooter}>
                                <div className={styles.title}>
                                    <span>
                                        {item.overview.substring(0, item.overview.indexOf('.'))}...
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async({ req }) => {
    const trands = await api.get('trending/movie/day?api_key=94c4fd66549e580c8156fce67b8e6690')
    const url_img = 'https://image.tmdb.org/t/p/original'

    return {
        props: { trands: trands.data.results, url_img: url_img }
    }
}