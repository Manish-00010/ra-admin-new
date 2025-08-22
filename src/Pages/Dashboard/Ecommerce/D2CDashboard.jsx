import React, { Suspense, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import D2CEcommerceCard from "@/Components/Ecommercedashboard/D2CEcommerceCard";
import D2CProductsCards from "@/Components/Ecommercedashboard/D2CProductsCards";
import CustomersCards from "@/Components/Ecommercedashboard/CustomersCards";
const OrdersCards = React.lazy(() => import("@/Components/Ecommercedashboard/OrdersCards"));

const D2CDashboard = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState("This Month");
  const [customDateRange, setCustomDateRange] = useState({
    startDate: "2025-08-01",
    endDate: "2025-08-31"
  });

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const selectDateRange = (range) => {
    setSelectedDateRange(range);
    if (range !== 'Custom') {
      setShowDatePicker(false);
    }
  };

  const handleCustomDateChange = (field, value) => {
    setCustomDateRange(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const applyCustomDate = () => {
    setSelectedDateRange(`${customDateRange.startDate} - ${customDateRange.endDate}`);
    setShowDatePicker(false);
  };

  // Close date picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDatePicker && !event.target.closest('.date-range-button-container')) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDatePicker]);

  return (
    <Suspense fallback="">
      <style>{`
        .date-range-button-container {
          position: relative;
        }
        
        .date-range-button-container .btn {
          border: 1px solid #ddd;
          background: white;
          color: #666;
          font-size: 14px;
          padding: 8px 16px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        
        .date-range-button-container .btn:hover {
          border-color: #007bff;
          color: #007bff;
        }
        
        .date-range-button-container .btn:focus {
          box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
        }
        
        .date-range-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          background: white;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 1000;
          min-width: 300px;
          margin-top: 4px;
        }
        
        .date-range-dropdown-header {
          padding: 16px 20px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .date-range-dropdown-body {
          padding: 16px 20px;
        }
        
        .date-range-presets {
          margin-bottom: 16px;
        }
        
        .date-range-preset {
          display: block;
          width: 100%;
          padding: 8px 12px;
          border: none;
          background: none;
          text-align: left;
          border-radius: 4px;
          margin-bottom: 4px;
          color: #666;
          font-size: 14px;
          transition: all 0.2s ease;
        }
        
        .date-range-preset:hover {
          background: #f8f9fa;
          color: #007bff;
        }
        
        .date-range-preset.active {
          background: #007bff;
          color: white;
        }
        
        .custom-date-inputs {
          border-top: 1px solid #f0f0f0;
          padding-top: 16px;
        }
        
        .date-input-group {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }
        
        .date-input-group input {
          flex: 1;
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }
        
        .date-input-group input:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
        }
        
        .apply-custom-date {
          width: 100%;
          padding: 8px 16px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          transition: background 0.2s ease;
        }
        
        .apply-custom-date:hover {
          background: #0056b3;
        }
      `}</style>
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mt-2">
              <h4 className="main-title">D2C Ecom Dashboard</h4>
              <div className="date-range-button-container">
                <button
                  className="btn btn-outline-secondary d-flex align-items-center gap-2"
                  onClick={toggleDatePicker}
                >
                  <i className="ph ph-calendar"></i>
                  <span>{selectedDateRange}</span>
                  <i className={`ti ti-chevron-${showDatePicker ? 'up' : 'down'}`}></i>
                </button>
                
                {showDatePicker && (
                  <div className="date-range-dropdown">
                    <div className="date-range-dropdown-header">
                      <h6 className="mb-0">Select Date Range</h6>
                    </div>
                    
                    <div className="date-range-dropdown-body">
                      <div className="date-range-presets mb-0">
                        {['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This Month', 'Last Month'].map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            className={`date-range-preset ${selectedDateRange === preset ? 'active' : ''}`}
                            onClick={() => selectDateRange(preset)}
                          >
                            {preset}
                          </button>
                        ))}
                        <button
                          type="button"
                          className={`date-range-preset ${selectedDateRange.includes('-') && !['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This Month', 'Last Month'].includes(selectedDateRange) ? 'active' : ''}`}
                          onClick={() => selectDateRange('Custom')}
                        >
                          Custom Range
                        </button>
                      </div>

                      {selectedDateRange === 'Custom' && (
                        <div className="custom-date-inputs">
                          <div className="date-input-group">
                            <input
                              type="date"
                              value={customDateRange.startDate}
                              onChange={(e) => handleCustomDateChange('startDate', e.target.value)}
                              placeholder="Start Date"
                            />
                            <input
                              type="date"
                              value={customDateRange.endDate}
                              onChange={(e) => handleCustomDateChange('endDate', e.target.value)}
                              placeholder="End Date"
                            />
                          </div>
                          <button
                            type="button"
                            className="apply-custom-date"
                            onClick={applyCustomDate}
                          >
                            Apply Date Range
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <D2CEcommerceCard />
          <D2CProductsCards />
        </div>
      </div>
    </Suspense>
  );
};

export default D2CDashboard;
