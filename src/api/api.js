
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function loginUser(email, password) {
  const response = await fetch(`${BASE_URL}/api/users/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' }
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Login failed');
  return data;
}

export async function registerUser(userData) {
  const response = await fetch(`${BASE_URL}/api/users/register`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json' }
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Register failed');
  return data;
}
