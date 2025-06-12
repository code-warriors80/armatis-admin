"use client";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SubscriberList from "./SubscriberList";
import SubscriberForm from "./SubcribersForm";

export default function TeamUploadPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <Header title="Amarits-Consulting" subtitle="Administrative Dashboard" />
        
        <div className="mt-3 shadow-md rounded-lg p-6">
            <div className="space-y-4">
              <SubscriberList />
            </div>

            <div className="mt-6">
                <SubscriberForm />
            </div>
        </div>
      </main>
    </div>
  );
}
