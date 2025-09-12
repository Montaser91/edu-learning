// app/page.js
import DashboardCTA from '@/components/DashboardCTA';
import CourseCard from '@/components/ui/CourseCard';
import { getCourses } from '@/lib/db';

import Link from 'next/link';

// Home Page (no layout needed — layout.js wraps it)
const Home=()=> {
  const courses = getCourses();

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="pt-28 pb-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-900 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            ابدأ رحلتك التعليمية اليوم
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            انضم إلى آلاف الطلاب حول العالم واحصل على شهادات معتمدة في البرمجة، التصميم، الذكاء الاصطناعي، والتسويق الرقمي.
          </p>
          <div className="space-x-4 space-x-reverse">
            <Link
              href="/auth/signup"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 
              font-bold py-3 px-8 rounded-lg text-lg 
              transition transform hover:scale-105 ml-3"
            >
              ابدأ مجانًا
            </Link>
            <Link
              href="#courses"
              className="inline-block border-2 border-white font-medium py-3 px-8 rounded-lg text-lg hover:bg-white hover:text-gray-900 transition"
            >
              تصفح الدورات
            </Link>
          </div>
        </div>
      </section>
      


      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">الدورات المتاحة</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            اختر من بين مجموعة متنوعة من الدورات المصممة لتناسب جميع المستويات، من المبتدئين إلى الخبراء.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course}/>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 md:flex items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">من نحن؟</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              إيدي أكاديمي منصة تعليمية رقمية تأسست بهدف تمكين الشباب العربي من تعلّم المهارات الرقمية الحديثة بجودة عالية وتكلفة منخفضة.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              نؤمن بأن التعليم يجب أن يكون متاحًا للجميع، بغض النظر عن الموقع أو الوضع المالي. نحن نقدم دورات تفاعلية، شهادات معتمدة، ودعم مباشر من المعلمين.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-8xl">🎓</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">جاهز للانطلاق؟</h2>
          <p className="text-xl mb-8 opacity-90">انضم إلى أكثر من 50,000 طالب حول العالم!</p>
          <Link
            href="/auth/signup"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition transform hover:scale-105"
          >
            سجّل الآن مجانًا
          </Link>
        </div>
      </section>
      <DashboardCTA />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-right">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">EduAcademy</h3>
              <p className="leading-relaxed">
                منصة تعليمية رقمية تقدم دورات في البرمجة، التصميم، الذكاء الاصطناعي، وريادة الأعمال.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><Link href="#home" className="hover:text-white transition">الرئيسية</Link></li>
                <li><Link href="#courses" className="hover:text-white transition">الدورات</Link></li>
                <li><Link href="#about" className="hover:text-white transition">من نحن</Link></li>
                <li><Link href="/auth/signin" className="hover:text-white transition">تسجيل الدخول</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">اتصل بنا</h4>
              <p className="mb-1">البريد: info@eduacademy.com</p>
              <p className="mb-1">الهاتف: +20 100 000 0000</p>
              <p>العنوان: القاهرة، مصر</p>
            </div>
          </div>

          <hr className="border-gray-800 my-8" />
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} EduAcademy. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </>
  );
}
export default Home;