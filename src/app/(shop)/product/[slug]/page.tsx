import { ProductMobileSlideShow, ProductSlideShow, QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: Props) {

  const { slug } = await params;
  const product = initialData.products.find(product => product?.slug === slug);
  if (!product) notFound();

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

      {/* SlideShow */}

      <div className="col-span-1 md:col-span-2">

        {/* Mobile slideshow */}

        <ProductMobileSlideShow
          title={product.title}
          images={product.images}
          classname="block md:hidden"
        />

        {/* Desktop slideshow */}

        <ProductSlideShow
          images={product.images}
          title={product.title}
          classname="hidden md:block"
        />
      </div>

      {/* Details */}

      <div className="col-span-1 px-5">

        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>

        <p className="text-lg mb-5"> {`$${product.price}`} </p>
        {/* size selector */}

        <SizeSelector
          selectedSise={product.sizes[0]}
          availableSize={product.sizes} />

        {/* quanty selector */}

        <QuantitySelector quantity={2} />

        {/* Button selector */}

        <button className="btn-primary my-5">
          Agregar a carrito
        </button>

        {/* Description */}

        <h3 className="font-bold text-sm">
          Descripcion
        </h3>

        <p className="font-light py-3">
          {product.description}
        </p>

      </div>

    </div>
  )
}
