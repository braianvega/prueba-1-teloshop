import { notFound } from "next/navigation";

interface Props{
  params:{
      id: String;
  }
}

export default async function CategoryPage({params}:Props){
  const {id} = await params;

  if(id==='kid')notFound();

  return (
    <div>
        <h1>Category page {id}</h1>
    </div>
  )
}
