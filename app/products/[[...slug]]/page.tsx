import React from 'react'

const page = ({params:{slug},searchParams:{sortOrder}}:{params:{slug:string[]},searchParams:{sortOrder:string}}) => {
  return (
    <div>
      product page {slug} {sortOrder}
    </div>
  )
}

export default page
