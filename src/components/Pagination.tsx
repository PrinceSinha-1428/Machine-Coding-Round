import { useEffect, useState } from "react";
import ProductCard from "../sub-Components/Productcard";


interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}


const Pagination = () => {

  const [results, setResults] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=500");
    const data = await response.json();
    setResults(data?.products)
  }

  useEffect(() => {
    fetchData()
  },[]);


  const PAGE_SIZE = 10;
  const totalProducts = results.length;

  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  if(results.length === 0) return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold">No Products</h1>
    </div>
  )

  return (
    <div className="flex min-h-screen justify-center p-2 ">
      <div className="flex flex-col items-center justify-center  ">
        <h1 className="text-4xl font-bold mb-4">Pagination {currentPage}</h1>
        <div className="flex flex-wrap gap-4  justify-center ">
        {results.slice(start, end).map((product) => (
          <ProductCard title={product.title} image={product.thumbnail} key={product.id} />
        ))}
        </div>
         <div className="flex justify-center mt-10 items-center cursor-pointer gap-2 ">
          <button disabled={currentPage === 0} className="border disabled:bg-gray-200 border-black p-2 cursor-pointer" onClick={() => setCurrentPage(currentPage-1)}>⬅️</button>
        {[...Array(noOfPages).keys()].map((n) => (
          <span onClick={() => setCurrentPage(n)} className={`${currentPage === n && 'bg-gray-700 text-white'} p-2 border border-black`} key={n}>{n}</span>
        ))}
        <button disabled={currentPage === noOfPages-1} className="border disabled:bg-gray-200 border-black p-2 cursor-pointer" onClick={() => setCurrentPage(currentPage+1)}>➡️</button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;







