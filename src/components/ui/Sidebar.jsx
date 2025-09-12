import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Sidebar=({ user })=> {
  const router = useRouter();

  const adminMenu = [
    { name: "لوحة التحكم", href: "/dashboard/admin", icon: "📊" },
    { name: "إدارة الدورات", href: "/dashboard/admin/courses", icon: "📚" },
    { name: "إدارة المستخدمين", href: "/dashboard/admin/users", icon: "👥" },
    { name: "الإحصائيات", href: "/dashboard/admin/analytics", icon: "📈" },
    { name: "إعدادات الموقع", href: "/dashboard/settings", icon: "⚙️" },
  ];

  const userMenu = [
    { name: "ملفي", href: "/dashboard/user", icon: "👤" },
    { name: "الدورات المسجلة", href: "/dashboard/user/enrolled", icon: "📖" },
    { name: "التقدم", href: "/dashboard/user/progress", icon: "✅" },
    { name: "الشهادات", href: "/dashboard/user/certificates", icon: "🏆" },
    { name: "الإعدادات", href: "/dashboard/user/settings", icon: "⚙️" },
  ];

  const menu = user?.role === 'admin' ? adminMenu : userMenu;

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6 fixed" dir="rtl">
      <h2 className="text-2xl font-bold mb-8">القائمة</h2>
      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center space-x-3 space-x-reverse p-3 rounded hover:bg-gray-800 transition"
            onClick={(e) => {
              // Optional: Add logic for disabled links
            }}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-6 w-56 px-4">
        <p className="text-sm text-gray-400">
          مرحباً، <strong>{user?.name}</strong>
        </p>
        <button
          onClick={() => {
            localStorage.removeItem('user');
            router.push('/auth/signin');
          }}
          className="text-red-400 hover:text-red-300 text-sm mt-2"
        >
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}
export default Sidebar;