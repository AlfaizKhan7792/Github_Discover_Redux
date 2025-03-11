import React from 'react'

const Repository = ({item}) => {
  return (
    <>
     {/* <div className="card border p-3 ">
        <h1>name : {item?.name}</h1>
        <a href={item.clone_url} target='_blank'>Repository Here</a>
        <h2>{item.homepage}</h2>
        <a href={item.homepage} className='float-end text-blue-500' target='_blank'>Vercel Link Here</a>
        <p>{item.owner.user_view_type}</p>

        </div>  */}
         <li className="border p-3 my-2 list-none bg-gray-100 rounded-md shadow-md">
      <h2 className="font-bold text-lg">Name: {item?.name}</h2>
      <a
        href={item.clone_url}
        target="_blank"
        className="text-blue-500 hover:underline"
      >
        Repository Here
      </a>
      <h3 className="text-sm text-gray-700">{item.homepage}</h3>
      {item.homepage && (
        <a
          href={item.homepage}
          target="_blank"
          className="text-blue-500 hover:underline float-end"
        >
          Vercel Link Here
        </a>
      )}
      <p className="text-sm text-gray-600">{item.owner.user_view_type}</p>
    </li>
    </>
  )
}

export default Repository
