
interface prop{
    params:{id:number}
}
const page = ({params:{id}}:prop) => {
  return (
    <div>userDetail {id}</div>
  )
}

export default page