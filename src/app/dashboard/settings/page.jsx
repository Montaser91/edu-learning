import ProtectedRoute from '@/lib/ProtectedRoute';

const Settings=()=> {
  return (
    <ProtectedRoute requiredRole="admin">
      <div className="min-h-screen bg-gray-50 p-6" dir="rtl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">إعدادات الموقع</h1>

        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">الشعار</h2>
          <input type="file" className="border p-2 rounded" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">الألوان الرئيسية</h2>
          <div className="flex gap-4">
            <input type="color" defaultValue="#3B82F6" className="w-10 h-10 rounded" />
            <input type="color" defaultValue="#10B981" className="w-10 h-10 rounded" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">النص الرئيسي</h2>
          <textarea
            className="w-full p-3 border rounded-lg"
            rows="4"
            defaultValue="تعلّم مهارات المستقبل مع إيدي أكاديمي"
          ></textarea>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            حفظ التغييرات
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}
export default Settings;