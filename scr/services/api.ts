/**
 * Reusable API service layer.
 *
 * Wraps fetch with typed helpers. Future modules (appointments, patients,
 * treatments) will import from here so transport concerns stay centralised.
 */

export class ApiError extends Error {
  constructor(public status: number, message: string, public data?: unknown) {
    super(message);
    this.name = "ApiError";
  }
}

interface RequestOptions extends Omit<RequestInit, "body"> {
  body?: unknown;
  baseUrl?: string;
}

export async function apiFetch<T = unknown>(
  path: string,
  { body, baseUrl = "", headers, ...init }: RequestOptions = {},
): Promise<T> {
  const res = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const text = await res.text();
  const data = text ? safeJson(text) : null;

  if (!res.ok) {
    throw new ApiError(res.status, `Request failed: ${res.status}`, data);
  }
  return data as T;
}

function safeJson(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
