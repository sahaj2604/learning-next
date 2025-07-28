import React from 'react'

const page = ({params:{id,photoId}}:{params:{id:number,photoId:number}}) => {
  return (
    <div>photos {id} {photoId}</div>
  )
}

export default page