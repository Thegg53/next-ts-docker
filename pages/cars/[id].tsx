import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Car() {

    const router = useRouter()
    const { id } = router.query
    return (
        <div className={styles.container}>
            {id}
        </div>
    )
}