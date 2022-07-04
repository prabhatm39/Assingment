import React, { useEffect, useState } from 'react'


export const Todo = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const getData = ({page}) => {
        fetch("http://localhost:8080/data"+`?_page=${page}&_limit=10`)
        .then(r=>r.json())
        .then((d) => {
            console.log(d);
            setData(d);
        })
    }
    useEffect(() => {
        getData({page});
    },[page]);
  return (
    <div>
         <div>
            <button disabled={page==1} onClick={() => setPage(page-1)}>prev</button>
            <button disabled={page==5} onClick={() => setPage(page+1)}>next</button>
            </div>
        {data.map((res) => (<div style={{
            border: "1px solid tomato",
            padding: "1rem"
        }}>{res.title}
        <br/>
        <br/>
        </div>))}
       
    </div>
  )
}
