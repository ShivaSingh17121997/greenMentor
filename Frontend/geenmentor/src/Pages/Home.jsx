import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost/8080/products")
            .then((res) => {
                setProducts(res)
                console.log(res);
            });
    }, [])

    return (
        <div>


        </div>
    )
}
