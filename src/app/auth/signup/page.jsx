import Link from 'next/link';

const SignUp=()=> {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 flex items-center justify-center px-4" dir="rtl">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">إنشاء حساب جديد</h1>
        
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">الاسم الكامل</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="مثل: أحمد محمد"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="أدخل بريدك الإلكتروني"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">كلمة المرور</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="أدخل كلمة المرور"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            إنشاء الحساب
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          لديك حساب بالفعل؟{' '}
          <Link href="/auth/signin" className="text-green-600 hover:underline">
            سجل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
}
export default SignUp;