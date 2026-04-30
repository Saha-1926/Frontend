import React, { useState } from 'react';

import DealsTable from './DealsTable';
import CategoryTable from './CategoryTable';
import CreateDeal from './CreateDeal';
const Deals = () => {

  const [activeTab, setActiveTab] = useState("deals");

  return (
    <div className="p-5">

      {/* 🔥 TOP BUTTONS */}
      <div className="flex gap-4 mb-5">
        <button
          onClick={() => setActiveTab("deals")}
          className={`px-4 py-2 rounded ${
            activeTab === "deals"
              ? "bg-teal-600 text-white"
              : "border"
          }`}
        >
          DEALS
        </button>

        <button
          onClick={() => setActiveTab("category")}
          className={`px-4 py-2 rounded ${
            activeTab === "category"
              ? "bg-teal-600 text-white"
              : "border"
          }`}
        >
          CATEGORY
        </button>

        <button
          onClick={() => setActiveTab("create")}
          className={`px-4 py-2 rounded ${
            activeTab === "create"
              ? "bg-teal-600 text-white"
              : "border"
          }`}
        >
          CREATE DEAL
        </button>
      </div>

      {/* 🔥 CONTENT */}
      {activeTab === "deals" && <DealsTable />}
      {activeTab === "category" && <CategoryTable />}
      {activeTab === "create" && <CreateDeal />}

    </div>
  );
};

export default Deals;