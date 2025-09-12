const HomeLoader=()=> {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 text-center px-6">
      <div className="w-20 h-20 border-6 border-blue-500 border-t-transparent rounded-full animate-spin mb-6"></div>
      <h2 className="text-3xl font-bold text-gray-800 mb-3">جاري تحميل EduAcademy</h2>
      <p className="text-lg text-gray-600 max-w-md">
        نحن نجهز تجربتك التعليمية المثالية...
      </p>
      <div className="mt-8 w-full max-w-xs bg-gray-200 rounded-full h-2">
        <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: "60%" }}></div>
      </div>
    </div>
  );
}
export default HomeLoader;