import ProtectedRoute from '@/lib/ProtectedRoute';

const AdminDashboard=()=>{
    
  return (
    <ProtectedRoute requiredRole="admin">
      <div className="min-h-screen bg-gray-50 p-6" dir="rtl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">لوحة تحكم المدير</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-xl font-semibold">المستخدمين</h2>
            <p className="text-2xl text-blue-600 mt-2">1,240</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-xl font-semibold">الدورات</h2>
            <p className="text-2xl text-green-600 mt-2">48</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-xl font-semibold">الإيرادات</h2>
            <p className="text-2xl text-purple-600 mt-2">24,500 ج.م</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-xl font-semibold">المعلمين</h2>
            <p className="text-2xl text-orange-600 mt-2">12</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">إدارة الدورات</h3>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              إضافة دورة جديدة
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">إعدادات الموقع</h3>
            <Link href="/dashboard/settings" className="text-blue-600 hover:underline block">
              تحرير الشعار، الألوان، النصوص
            </Link>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
export default AdminDashboard;