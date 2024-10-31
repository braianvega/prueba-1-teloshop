import { ProductGrid, Title } from "@/components";
import { Categorie } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props{
  params:{
      id: Categorie;
  }
}

const seedProducts=initialData.products;

export default async function CategoryPage({params}:Props){
  const {id} = await params;

  if(id===('kids' as Categorie))notFound();

  const productsGender=seedProducts.filter(product=>product.gender===id);

  const gender:Record<Categorie, string> = {
    'men': 'Hombre',
    'women': 'Mujer',
    'kid': 'Niño',
    'unisex': 'Todos',
  }

  return (
    <>
      <Title
        title={`Articulos de ${(gender)[id]}`}
        subTitle="All products"
        className="mb-2"
      />
      <ProductGrid products={productsGender}/>
    </>
  )
}
