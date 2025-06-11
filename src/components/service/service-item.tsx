// components/services/ServiceItem.tsx
import React from "react";

interface Props {
  title: string;
  description: string;
}

const ServiceItem = ({ title, description }: Props) => {
  return (
    <div className="p-4 border border-gray-200 rounded-md hover:shadow-sm transition bg-gray-50">
      <h3 className="font-semibold text-gray-700">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default ServiceItem;
