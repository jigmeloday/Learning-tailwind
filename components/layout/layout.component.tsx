import { Fragment } from 'react';
import Head from 'next/head';

function Layout(props){
    return(
        <Fragment>
            <Head>
                <title>JL Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout;