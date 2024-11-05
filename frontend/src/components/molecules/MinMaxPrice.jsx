import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Daftar mata uang dengan simbol
const currencies = [
  { name: "Dollar", symbol: "$" },
  { name: "Yen", symbol: "¥" },
  { name: "IDR", symbol: "Rp" },
  { name: "Euro", symbol: "€" },
];

const CurrencyDropdown = ({ onCurrencySelect }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    onCurrencySelect(currency); // Mengirim mata uang yang dipilih ke komponen parent
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 bg-white border border-secondary text-black rounded"
      >
        <span>
          {selectedCurrency ? `${selectedCurrency.name} (${selectedCurrency.symbol})` : "Select Currency"}
        </span>
        <div
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </button>

      {isOpen && (
        <div className="relative mt-2 w-full bg-white border rounded shadow-lg max-h-48 overflow-y-auto">
          <ul className="p-2">
            {currencies.map((currency) => (
              <li
                key={currency.name}
                onClick={() => handleCurrencyChange(currency)}
                className="cursor-pointer p-2 text-gray-700 hover:bg-gray-100"
              >
                {currency.name} ({currency.symbol})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const MinMaxPrice = () => {
  const [currency, setCurrency] = useState({ name: "IDR", symbol: "Rp" }); // Default ke IDR
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleCurrencySelect = (selectedCurrency) => {
    setCurrency(selectedCurrency); // Mengupdate simbol mata uang
  };

  return (
    <div>
      <CurrencyDropdown onCurrencySelect={handleCurrencySelect} />

      <div className="mt-4 flex gap-4">
        {/* Input Harga Minimum */}
        <div className="flex items-center border rounded p-2 w-full">
          <span className="text-gray-500 mr-2">Min</span>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="0,00"
            className="w-full border-none outline-none text-left bg-white"
          />
          <span className="ml-2 text-gray-500">{currency.symbol}</span>
        </div>

        {/* Input Harga Maksimum */}
        <div className="flex items-center border rounded p-2 w-full">
          <span className="text-gray-500 mr-2">Maks</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="0,00"
            className="w-full border-none outline-none text-left bg-white"
          />
          <span className="ml-2 text-gray-500">{currency.symbol}</span>
        </div>
      </div>
    </div>
  );
};

export default MinMaxPrice;
