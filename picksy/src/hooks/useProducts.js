 import { useState } from "react";
import { demoProducts } from "../data/demoProducts";

export function useProducts() {
  const [products] = useState(demoProducts);
  const [loading] = useState(false);
  const [error] = useState(null);

  return {
    products,
    loading,
    error,
  };
}