"use client";
import React, { useState } from "react";

type Subscriber = {
  id: number;
  email: string;
  subscriptionDate: string;
};

const PAGE_SIZE = 5;

export default function SubscriberList() {
  const [subscribers] = useState<Subscriber[]>([
    { id: 1, email: "jane@example.com", subscriptionDate: "2025-05-01" },
    { id: 2, email: "john@example.com", subscriptionDate: "2025-05-02" },
    { id: 3, email: "emily@example.com", subscriptionDate: "2025-05-03" },
    { id: 4, email: "michael@example.com", subscriptionDate: "2025-05-04" },
    { id: 5, email: "sophia@example.com", subscriptionDate: "2025-05-05" },
    { id: 6, email: "david@example.com", subscriptionDate: "2025-05-06" },
    { id: 7, email: "olivia@example.com", subscriptionDate: "2025-05-07" },
    { id: 8, email: "william@example.com", subscriptionDate: "2025-05-08" },
    { id: 9, email: "ava@example.com", subscriptionDate: "2025-05-09" },
    { id: 10, email: "james@example.com", subscriptionDate: "2025-05-10" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(subscribers.length / PAGE_SIZE);

  const paginatedSubscribers = subscribers.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Subscribers List
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing {PAGE_SIZE} subscribers per page
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-white dark:bg-gray-700 text-gray-700 dark:text-white text-sm uppercase">
              <tr>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Subscription Date</th>
              </tr>
            </thead>
            <tbody>
              {paginatedSubscribers.map((subscriber, index) => (
                <tr
                  key={subscriber.id}
                  className={`border-b dark:border-gray-700 ${
                    index % 2 === 0
                      ? "bg-white dark:bg-gray-900"
                      : "bg-gray-50 dark:bg-gray-800"
                  }`}
                >
                  <td className="px-6 py-4 text-sm text-[#EE2A55] dark:text-[#EE2A55] font-medium">
                    {subscriber.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    {subscriber.subscriptionDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-700">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            className="px-4 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            className="px-4 py-2 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
