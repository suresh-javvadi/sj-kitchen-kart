const PROXY_URL = "http://localhost:3000";

export async function fetchViaProxy(targetURL) {
  try {
    const encodedURL = encodeURIComponent(targetURL);
    const response = await fetch(targetURL);

    if (!response.ok) {
      throw new Error(`Proxy request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("fetchViaProxy error:", error);
    throw error;
  }
}
