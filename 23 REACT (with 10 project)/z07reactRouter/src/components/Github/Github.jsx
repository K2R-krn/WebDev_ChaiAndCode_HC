import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {


    //* Regular method used when we click on Github and then it loads on on div load
    //! But we want it -> When hover on Github then itseld we want to load it
    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/K2R-krn')
    //     .then((response)=> response.json())
    //     .then(data=> {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    //^ Better method -> Wrote an async fn below to fetch response
    //^ And here useLoaderData hook will get data..
    const data = useLoaderData()
    console.log(data)

  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4 '> 
        Github Followers: {data.followers}
        <img src={data.avatar_url} width={300} alt='avatar'></img>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => { // We make this async 
    const response = await fetch('https://api.github.com/users/K2R-krn')
    return response.json();
}