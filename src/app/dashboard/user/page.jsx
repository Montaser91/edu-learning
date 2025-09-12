import ProtectedRoute from '../../../lib/ProtectedRoute';

const UserDashboard=()=> {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 p-6" dir="rtl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">لوحة تحكم الطالب</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">الدورات المسجلة</h2>
            <p className="text-gray-600">3 دورات نشطة</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">التقدم</h2>
            <p className="text-gray-600">75% من الدورة الحالية</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">الشهادات</h2>
            <p className="text-gray-600">تم إصدار 2 شهادات</p>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">إعدادات الحساب</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            تغيير كلمة المرور
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}
export default UserDashboard;