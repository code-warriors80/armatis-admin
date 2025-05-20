export const API_BASE_URL = "https://loveforyou-backend.onrender.com/api/v1";

// Generic fetcher with optional config and improved error handling
export async function fetcher<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });

    // Check if the response is ok (status 2xx)
    if (!response.ok) {
      // If not, attempt to parse the error body
      const errorResponse = await response.json().catch(() => null);
      const errorMessage = errorResponse?.message || "Something went wrong";
      throw new Error(errorMessage);
    }

    // Return the parsed response body
    return response.json() as Promise<T>;

  } catch (error) {
    // Improved error handling: log the error and rethrow
    console.error("Fetch error:", error);
    throw error;
  }
}
