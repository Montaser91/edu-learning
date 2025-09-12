// Mock authentication (replace with Firebase, Auth.js, etc.)

// Register a new user
export async function register(name, email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const exists = users.find(u => u.email === email);

  if (exists) {
    throw new Error("البريد الإلكتروني مسجل مسبقًا");
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password, // In real app: hash it!
    role: "user",
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  return newUser;
}

// Login user
export async function login(email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    throw new Error("البريد أو كلمة المرور غير صحيحة");
  }

  localStorage.setItem('user', JSON.stringify(user));
  return user;
}

// Logout
export function logout() {
  localStorage.removeItem('user');
}

// Get current user
export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

// Protect route by role
export function requireAuth(requiredRole) {
  const user = getCurrentUser();
  if (!user) return { redirect: '/auth/signin' };
  if (requiredRole && user.role !== requiredRole) {
    return { redirect: '/dashboard/user' };
  }
  return { user };
}