import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const NavCurrency = () => {
  const [selectedCurrency, setSelectedCurrency] = useState({ code: 'INR', name: '₹ INR', flag: '🇮🇳' });
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  
  const currencyRef = useRef(null);

  const currencies = [
    { code: 'INR', name: '₹ INR', flag: '🇮🇳' },
    { code: 'USD', name: '$ USD', flag: '🇺🇸' },
    
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setIsCurrencyOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCurrencyToggle = () => {
    setIsCurrencyOpen(!isCurrencyOpen);
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setIsCurrencyOpen(false);
  };

  return (
    <div className="flex items-center space-x-2 p-4">
      {/* Currency Selector */}
      <div className="relative" ref={currencyRef}>
        <button
          onClick={handleCurrencyToggle}
          className="flex items-center px-3 py-[1px] text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-[100px] justify-between hover:text-blue-500"
        >
          <div className="flex items-center space-x-2">
            <span className="text-">{selectedCurrency.flag}</span>
            <span>{selectedCurrency.name}</span>
          </div>
          <ChevronDown 
            className={`ml-1 h-4 w-4 transition-transform duration-200 ${
              isCurrencyOpen ? 'rotate-180' : ''
            }`} 
          />
        </button>

        {/* Currency Dropdown */}
        {isCurrencyOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50 py-1">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => selectCurrency(currency)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-150 flex items-center space-x-3 ${
                  selectedCurrency.code === currency.code 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-700'
                }`}
              >
                <span className="text-">{currency.flag}</span>
                <span>{currency.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavCurrency;