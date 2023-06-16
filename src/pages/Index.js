import React from 'react'
import Catalog from '../componenets/Catalog';
import { Helmet } from "react-helmet";

function Index() {
    return (
        <main>
            <Helmet>
                <title>All Characters</title>
            </Helmet>
            <div className="container">
                <section>
                    <Catalog />
                </section>
            </div>
        </main>
    )
}

export default Index;