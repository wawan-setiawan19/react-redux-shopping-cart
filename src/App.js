import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from './redux/actions';

function App() {
  const cart = useSelector(state => state.cart);  // Mengambil data keranjang dari Redux store
  const dispatch = useDispatch();

  // Fungsi untuk menambah jumlah produk
  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  // Fungsi untuk mengurangi jumlah produk
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  // Fungsi untuk menghapus produk dari keranjang
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  // Menghitung total harga semua produk di keranjang
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="flex gap-10 p-10">
      {/* Kolom Kiri */}
      <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Jumlah Item: {cart.length}</h2>
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
              <div className="flex-1">
                <h4 className="text-xl font-medium">{item.name}</h4>
                <p className="text-sm text-gray-500">Price: ${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="px-3 py-1 bg-gray-300 rounded-lg mr-2"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="px-3 py-1 bg-gray-300 rounded-lg ml-2"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 text-xl font-semibold ml-4"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Kolom Kanan */}
      <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Summary</h3>
          <p className="text-lg">Total: ${calculateTotal()}</p>
          <button className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
