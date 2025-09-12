const CourseCard=({ course, enrolled = false })=> {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden">
      <div className="h-40 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
        <span className="text-6xl">{course.icon || "📚"}</span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-1">المُدرّس: {course.instructor}</p>
        <p className="text-gray-500 text-sm">المدة: {course.duration}</p>
        <p className="text-green-600 font-medium mt-2">{course.level}</p>

        <button
          className={`mt-4 w-full py-2 rounded font-medium transition ${
            enrolled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
          disabled={enrolled}
        >
          {enrolled ? "مسجل مسبقًا" : "التسجيل في الدورة"}
        </button>
      </div>
    </div>
  );
}
export default CourseCard;