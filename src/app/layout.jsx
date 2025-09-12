// app/layout.js

import Navbar from '@/components/ui/Navbar';
import './globals.css'; // Optional: if you have custom CSS

export const metadata = {
  title: 'EduAcademy - التعلم الرقمي للمستقبل',
  description: 'منصة تعليمية عربية لتعليم البرمجة، التصميم، والذكاء الاصطناعي',
};

const RootLayout=({ children })=> {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans antialiased min-h-screen bg-gray-50">
        {/* Navbar appears on all pages */}
        <Navbar/>

        {/* Main content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
export default RootLayout;