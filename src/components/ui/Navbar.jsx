'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from "react-icons/fa";
import Logo from '../../assets/images/EG-TECH.jpg'
import { useEffect, useState } from 'react';

const Navbar=()=> {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 h-[90px]" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center py-4">
          {/* Logo */}
          <Link href="/" className="h-[100px] flex items-center justify-center">
          
          <Image src={Logo} className='w-[80px] h-[80px] rounded-full mb-8' alt='logo' />
          <span className=' font-bold text-2xl text-purple-700'>EGY-TECH</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 space-x-reverse
          text-purple-900 items-center text-xl ">
            <Link href="/" className="hover:text-purple-400 hover:font-bold hover:border-b-3">الرئيسية</Link>
              <Link href="/#about" className="hover:text-purple-600 ml-7 hover:font-bold hover:border-b-3">خدماتنا</Link>
            <Link href="/#edurow" className="hover:text-purple-500 hover:font-bold hover:border-b-3">مسارات التعلم</Link>
              <Link href="/#eduplan" className="hover:text-purple-600 ml-7 hover:font-bold hover:border-b-3">خطط التعلم</Link>
               <Link href="/#about" className="hover:text-purple-600 ml-7 hover:font-bold hover:border-b-3">من نحن</Link>
                <Link href="/#contact" className="hover:text-purple-600 ml-7 hover:font-bold hover:border-b-3">تواصل معنا</Link>
           

            {/* Conditional Dashboard Links */}
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link href="/dashboard/admin" className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                    لوحة تحكم المدير
                  </Link>
                )}
                <Link href="/dashboard/user" className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                  ملفي
                </Link>
                <button onClick={handleLogout} className="text-red-600 hover:text-red-800 text-sm">
                  تسجيل الخروج 
                </button>
              </>
            ) : (
              <Link href="/auth/signin" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                تسجيل الدخول <FaArrowLeft className='text-red' />
              </Link>
            )}
          </div>
          
          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t text-right">
            <Link href="/" className="block py-2 px-4 hover:bg-gray-100">الرئيسية</Link>
            <Link href="/#courses" className="block py-2 px-4 hover:bg-gray-100">الدورات</Link>
            <Link href="/#about" className="block py-2 px-4 hover:bg-gray-100">من نحن</Link>

            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link href="/dashboard/admin" className="block py-2 px-4 hover:bg-gray-100 font-medium text-red-600">
                    لوحة تحكم المدير
                  </Link>
                )}
                <Link href="/dashboard/user" className="block py-2 px-4 hover:bg-gray-100">ملفي</Link>
                <button onClick={handleLogout} className="w-full text-right text-red-600 py-2 px-4 hover:bg-gray-100">
                  تسجيل الخروج
                </button>
              </>
            ) : (
              <Link href="/auth/signin" className="block py-2 px-4 hover:bg-gray-100">تسجيل الدخول</Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
export default  Navbar;