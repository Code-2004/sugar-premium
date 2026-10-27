import React, { useState, useRef, useEffect } from 'react';

export default function CustomDropdown({
  label,
  icon,
  value,
  onChange,
  options = [],
  align = 'left'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`custom-dropdown-container ${isOpen ? 'is-open' : ''}`} ref={dropdownRef}>
      {/* Field Label */}
      <div className="custom-dropdown-label">
        {icon && <span className="dropdown-label-icon">{icon}</span>}
        <span>{label}</span>
      </div>

      {/* Trigger Button */}
      <button
        type="button"
        className={`custom-dropdown-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="dropdown-selected-text">
          {selectedOption ? selectedOption.label : 'Select...'}
        </span>
        <svg 
          className={`dropdown-chevron ${isOpen ? 'rotate' : ''}`} 
          viewBox="0 0 20 20" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Floating Options Panel */}
      {isOpen && (
        <div className={`custom-dropdown-menu ${align === 'right' ? 'align-right' : ''}`} role="listbox">
          <div className="dropdown-menu-inner">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`custom-dropdown-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelect(option.value)}
                >
                  <div className="dropdown-item-content">
                    <span className="dropdown-item-title">{option.label}</span>
                    {option.hint && (
                      <span className="dropdown-item-hint">{option.hint}</span>
                    )}
                  </div>
                  {isSelected && (
                    <span className="dropdown-item-check" aria-hidden="true">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
