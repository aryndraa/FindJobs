import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Daftar mata uang dengan simbol
const currencies = [
  { name: "Dollar", symbol: "$" },
  { name: "Yen", symbol: "¥" },
  { name: "IDR", symbol: "Rp" },
  { name: "Euro", symbol: "€" },
];

const CurrencyDropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Handle pemilihan mata uang
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false); // Tutup dropdown setelah memilih mata uang
  };

  return (
    <div className="relative w-full">
      {/* Button Dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 bg-white text-black border border-secondary rounded"
      >
        {/* Tampilkan Mata Uang Terpilih atau Placeholder */}
        <span>
          {selectedCurrency ? `${selectedCurrency.name} (${selectedCurrency.symbol})` : "Select Currency"}
        </span>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </button>

      {/* Dropdown Menu dengan Scroll */}
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

export default CurrencyDropdown;
