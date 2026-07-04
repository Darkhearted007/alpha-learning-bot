const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

async function request(path) {
    const response = await fetch(`${API_BASE_URL}${path}`);

    if (!response.ok) {
        throw new Error(`Request failed (${response.status}) for ${path}`);
    }

    return response.json();
}

export function getHealth() {
    return request("/health");
}

export function getState() {
    return request("/state");
}