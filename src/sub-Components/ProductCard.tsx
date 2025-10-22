interface ProductCardProps {
  image: string;
  title: string;
}


const ProductCard = ({ image, title }: ProductCardProps) => {
  return (
    <div className="flex flex-col p-4 w-[200px] border border-black my-2 justify-center items-center">
      <img className="size-40" src={image} alt={title} />
      <span className="text-center">{title}</span>
    </div>
  );
}

export default ProductCard