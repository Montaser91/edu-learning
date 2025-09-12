// ✅ lib/db.jsx - Safe for SSR

// Initialize data safely
function getFromLocalStorage(key, initialValue = []) {
  if (typeof window === 'undefined') {
    return initialValue; // Return default if on server
  }
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.warn(`Error reading ${key} from localStorage:`, error);
    return initialValue;
  }
}

function setToLocalStorage(key, value) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error saving ${key} to localStorage:`, error);
  }
}

// ✅ Safe initialization
const initialUsers = [
  { id: 1, name: 'احمد محمد', email: 'ahmed@example.com', role: 'user' },
  { id: 2, name: 'montaser', email: 'programmermontaser@gmail.com',password:'01159389065mans', role: 'admin' },
];

const initialCourses = [
  { id: 1, title: 'أساسيات HTML & CSS', instructor: 'أحمد محمد', duration: '6 أسابيع', level: 'مبتدئ' },
  { id: 2, title: 'تطوير مع React', instructor: 'سارة خالد', duration: '8 أسابيع', level: 'متوسط' },
  { id: 3, title: 'الذكاء الاصطناعي', instructor: 'د. عمر', duration: '10 أسابيع', level: 'متقدم' },
];

// ✅ Get or initialize data
export function getUsers() {
  return getFromLocalStorage('users', initialUsers);
}

export function getCourses() {
  return getFromLocalStorage('courses', initialCourses);
}

export function saveUsers(users) {
  setToLocalStorage('users', users);
}

export function saveCourses(courses) {
  setToLocalStorage('courses', courses);
}

// Example: Enroll user in course
export function enrollUserInCourse(userId, courseId) {
  const enrollments = getFromLocalStorage('enrollments', []);
  const exists = enrollments.find(e => e.userId === userId && e.courseId === courseId);
  if (exists) return false;

  enrollments.push({ userId, courseId, enrolledAt: new Date().toISOString() });
  setToLocalStorage('enrollments', enrollments);
  return true;
}