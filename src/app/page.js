  "use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/test");
      const json = await res.json();
      setData(json);
    } catch (error) {
      setData({ error: error.message });
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Dashboard Dr. Beauty Mendoza</h1>
        
        <button
          onClick={testAPI}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Cargando..." : "Probar Conexión DB"}
        </button>

        {data && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <pre className="text-sm overflow-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}