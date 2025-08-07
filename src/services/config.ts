export type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: unknown; status?: number };

export type FetchOptions = {
  headers?: HeadersInit;
  body?: unknown;
  nextOptions?: RequestInit["next"];
  cache?: RequestInit["cache"];
};

// Como se usan desde el servidor no es necesario usar NEXT_PUBLIC_
const baseUrl = process.env.API_URL;
const authToken = process.env.AUTH_TOKEN;

async function request<T>(
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  url: string,
  { headers, body, nextOptions, cache }: FetchOptions = {}
): Promise<Result<T>> {
  try {
    const authorization: Record<string, string> = authToken
      ? { Authorization: `Bearer ${authToken}` }
      : {};

    const response = await fetch(`${baseUrl}/${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...authorization,
        ...headers,
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
      next: nextOptions,
      cache: cache,
    });

    const contentType = response.headers.get("content-type");

    const data = contentType?.includes("application/json")
      ? await response.json()
      : await response.text();

    if (!response.ok) {
      return {
        ok: false,
        error: typeof data === "string" ? data : "Error inesperado",
        status: response.status,
      };
    }

    return { ok: true, data };
  } catch (error: unknown) {
    return { ok: false, error };
  }
}

export const apiServer = {
  get: <T>(url: string, options?: FetchOptions) =>
    request<T>("GET", url, options),
  post: <T>(url: string, options?: FetchOptions) =>
    request<T>("POST", url, options),
  put: <T>(url: string, options?: FetchOptions) =>
    request<T>("PUT", url, options),
  patch: <T>(url: string, options?: FetchOptions) =>
    request<T>("PATCH", url, options),
  delete: <T>(url: string, options?: FetchOptions) =>
    request<T>("DELETE", url, options),
};
