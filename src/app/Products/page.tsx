import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";import TeamUploadForm from "@/components/TeamUploadForm";
import ProductServiceForm from "@/components/ProductServiceForm";

export default function TeamUploadPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <Header title="Amartis-Consulting" subtitle="Administrative Dashboard" />
        
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Update Products</h2>
            <p className="text-gray-600">Manage your Products page here.</p>

            <div className="mt-6">
              <ProductServiceForm />
            </div>
        </div>
      </main>
    </div>
  );
}
