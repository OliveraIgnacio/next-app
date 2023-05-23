import Head from 'next/head'

export default function PageLayout({ children, title = 'NewApp' }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                🗞NewsAppi
            </header>
            <main>
                {children}
            </main>

            <style jsx>{`
             header{
                padding: 20px;
             }
            `}
            </style>
        </>
    )
}



// cb2c2345a8ab475ebd59379b8945c1a9