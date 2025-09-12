'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProtectedRoute=({ children, requiredRole = null })=> {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      // ✅ Safely access localStorage (only runs in browser)
      const userData = localStorage.getItem('user');

      if (!userData) {
        // User not logged in
        router.push('/auth/signin');
        return;
      }

      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);

      // Role check
      if (requiredRole && parsedUser.role !== requiredRole) {
        router.push('/dashboard/user'); // Redirect unauthorized
        return;
      }
    } catch (error) {
      console.error('Auth error:', error);
      router.push('/auth/signin');
    } finally {
      setLoading(false);
    }
  }, [requiredRole, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return children;
}
export default ProtectedRoute;