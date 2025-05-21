import React from "react";

const tabs = [
  "Dashboard",
  "Orders",
  "Address",
  "Notes",
  "Tasks",
  "Contacts",
  "Credit History",
];

const TabNavigation: React.FC = () => {
  return (
    <div className="flex bg-gray-50 rounded-t-2xl overflow-x-auto gap-2 dark:bg-gray-900 dark:border-gray-800">
      {tabs.map((tab, idx) => (
        <div
          key={tab}
          className={`
            px-4 py-3
            font-light text-base
            border border-b-0
            ${idx === 0
              ? "text-blue-700 bg-white dark:bg-gray-900 dark:text-white dark:font-bold z-10 rounded-t-2xl dark:border-gray-800 dark:border-t-3 dark:border-r-3 dark:border-l-3"
              : "text-gray-700 bg-gray-50 border-gray-200 rounded-t-2xl dark:bg-gray-900 dark:text-white dark:border-gray-800 dark:bg-gray-900"}
            ${idx !== 0 ? "-ml-px" : ""}
            transition-colors
          `}
          style={{ minWidth: 110, textAlign: "center" }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TabNavigation; 