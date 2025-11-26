import React, { useEffect, useState } from 'react'

function Github() {

    const [data,setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Ashu-cmmd')
        .then(response => response.json)
        .then(data =>{
            console.log(data);
            setData(data)
            
        })
    },[])
  return (
    <div className='bg-gray-600 text-amber-50 text-3xl text-center p-6 '>Github follower :{data.followers} 
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github