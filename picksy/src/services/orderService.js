import { supabase } from "../lib/supabase";

export async function createOrder({
  userId,
  items,
  total
}) {
  const { data, error } = await supabase
    .from("orders")
    .insert([
      {
        user_id: userId,
        items,
        total
      }
    ])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getUserOrders(userId) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", {
      ascending: false
    });

  if (error) {
    throw error;
  }

  return data;
}