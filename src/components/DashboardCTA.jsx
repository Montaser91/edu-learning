'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const DashboardCTA=()=> {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Failed to load user:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="py-16 bg-blue-50"></div>; // Or a skeleton
  }

  if (!user) {
    return null; // Don't show if not logged in
  }

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">مرحباً، {user.name || 'مستخدم'}!</h2>
        <p className="text-gray-600 mb-6">اختر وجهتك التالية:</p>
        <div className="space-x-4 space-x-reverse inline-block">
          <Link
            href={user.role === 'admin' ? '/dashboard/admin' : '/dashboard/user'}
            className={`px-6 py-3 rounded-lg font-medium transition ${
              user.role === 'admin'
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {user.role === 'admin' ? 'لوحة تحكم المدير' : 'لوحة تحكم الطالب'}
          </Link>
        </div>
      </div>
    </section>
  );
}
export default DashboardCTA;