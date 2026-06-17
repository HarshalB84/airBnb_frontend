const API_BASE = "/api/v1";

export const tokenStore = {
  get() {
    return localStorage.getItem("accessToken");
  },
  set(token) {
    localStorage.setItem("accessToken", token);
  },
  clear() {
    localStorage.removeItem("accessToken");
  },
};

async function request(path, options = {}) {
  const token = tokenStore.get();

  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${path}`, {
    credentials: "include",
    ...options,
    headers,
  });

  const text = await response.text();
  const body = text ? JSON.parse(text) : null;
  const payload = body?.data ?? body;

  if (!response.ok) {
    throw new Error(body?.error?.message || response.statusText);
  }

  return payload;
}

export const api = {
  login(data) {
    return request("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  signup(data) {
    return request("/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  searchHotels(data) {
    return request("/hotels/search", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  getHotelInfo(hotelId) {
    return request(`/hotels/${hotelId}/info`);
  },

  initialiseBooking(data) {
    return request("/bookings/init", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  addGuests(bookingId, guests) {
    return request(`/bookings/${bookingId}/addGuests`, {
      method: "POST",
      body: JSON.stringify(guests),
    });
  },

  initiatePayment(bookingId) {
    return request(`/bookings/${bookingId}/payments`, {
      method: "POST",
    });
  },

  myBookings() {
    return request("/users/myBookings");
  },
};