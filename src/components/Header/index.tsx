import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/images/logo.png'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <nav>
                    <Link href={'#'}><a>Trends</a></Link>
                    <Link href={'#'}><a>Trends</a></Link>
                    <Link href={'#'}><a>Trends</a></Link>
                    <Link href={'#'}>
                        <a>
                            <Image className={styles.logo} src={logo} alt='logo-movies-review' />
                        </a>
                    </Link>
                    <Link href={'#'}><a>Trends</a></Link>
                    <Link href={'#'}><a>Trends</a></Link>
                    <Link href={'#'}><a>Trends</a></Link>
                </nav>
                <button>
                    sair
                </button>
            </div>
        </header>
    )
}