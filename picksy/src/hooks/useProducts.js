import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { demoProducts } from "../data/demoProducts";

export function useProducts() {
  const [products, setProducts] = useState(demoProducts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .order("created_at", {
            ascending: false
          });

        if (error) {
          console.warn("Supabase products unavailable:", error.message);
          return;
        }

        if (data && data.length > 0) {
          setProducts(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error
  };
}