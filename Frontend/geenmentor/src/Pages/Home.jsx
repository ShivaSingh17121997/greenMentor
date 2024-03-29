import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
    const [products, setProducts] = useState([])

    // useEffect(() => {
    //      axios.get("http://localhost:8080/products")
    //         .then((res) => { 
    //             setProducts(res)
    //             console.log(res);
    //         })
    //         // .then((data)=>{
    //         //     setProducts(data)
    //         //     console.log(data)
    //         // })

    // }, [])

    useEffect(() => {
        fetch("http://localhost:8080/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProducts(data)
            })
    })

    return (
        <div>
            {products.map((item)=>{
                return <div>
                    <h1>{item.todo}</h1>
                    <p>{item.completed}</p>
                </div>
            })}

        </div>
    )
}
