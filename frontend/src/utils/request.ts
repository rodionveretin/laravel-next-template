import type { JSONValue } from '@/types/JSONValue';

export async function apiRequest(
 url: string,
 method: string = 'GET',
 data: FormData | JSONValue | null = null
) {
 const headers: { [key: string]: string } = {};
 let body;

 if (data instanceof FormData) {
  body = data;
 } else if (data && typeof data === 'object') {
  headers['Content-Type'] = 'application/json';
  body = JSON.stringify(data);
 }

 const options = {
  method,
  headers,
  body: method !== 'GET' && body ? body : undefined,
 };

 try {
  const response = await fetch(url, options);

  if (!response.ok) {
   throw new Error(`HTTP error! status: ${response.status}`);
  }

  try {
   return await response.json();
  } catch (e) {
   return await response.text();
  }
 } catch (error) {
  console.error('Fetch error:', error);
  throw error;
 }
}
