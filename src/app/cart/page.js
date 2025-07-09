"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/login");
          return;
        }

        const response = await fetch("/api/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Ошибка загрузки корзины");

        const data = await response.json();
        setCart(data);
      } catch (error) {
        console.error("Ошибка:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [router]);

  const removeItem = async (itemId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }

      const response = await fetch(`/api/cart/remove?itemId=${itemId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Ошибка удаления товара");

      const updatedResponse = await fetch("/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCart(await updatedResponse.json());
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  const updateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }

      const response = await fetch("/api/cart/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          itemId: itemId,
          quantity: newQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update quantity");
      }

      const updatedResponse = await fetch("/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCart(await updatedResponse.json());
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  if (!cart || !cart.cart_items || cart.cart_items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Ваша корзина пуста</h1>
        <Link
          href="/"
          className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Вернуться к покупкам
        </Link>
      </div>
    );
  }

  // Считаем общую сумму
  const total = cart.cart_items.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Ваша корзина</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cart.cart_items.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 flex flex-col">
            <div className="relative h-48 w-full mb-4">
              <Image
                src={item.product.image}
                alt={item.product.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{item.product.title}</h2>
            <p className="text-gray-600 mb-2">
              ${item.product.price.toFixed(2)}
            </p>

            <div className="flex items-center mb-4">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-3 py-1 border rounded-l hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-3 py-1 border rounded-r hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="mt-auto text-red-600 hover:text-red-800 text-sm"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>

      <div className="border-t pt-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Итого:</span>
          <span className="text-xl font-bold">${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default CartPage;
