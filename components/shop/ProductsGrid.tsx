"use client";

import ProductCard from "@/components/product/ProductCard";
import { motion } from "framer-motion";

type Product = {
  id: string;
  name: string;
  subtitle: string | null;
  description: string;
  price: number;
  image: string;
};

type Props = {
  products: Product[];
};

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function ProductsGrid({ products }: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6"
    >
      {products.map((product) => (
        <motion.div 
          key={product.id} 
          variants={itemVariants}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
}
