import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import ServiceForm from "@/components/ServicesForm";

export default function TeamUploadPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <Header title="Amartis-Consulting" subtitle="Administrative Dashboard" />
        
        <div className="mt-8 shadow-md rounded-lg p-6">
            <div className="space-y-4">
              <ServiceForm />
            </div>
        </div>
      </main>
    </div>
  );
}
