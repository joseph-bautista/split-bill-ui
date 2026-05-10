# Split Bill UI

Frontend application for the Split Bill system.

Built using:

* ReactJS
* Vite
* Axios
* React Router DOM

This application connects to the Split Bill API backend.

---

# Features

## Authentication

* Login
* Register
* Logout
* Protected routes

## Bills

* View bills
* Create bills
* View bill details

## Items

* Add items
* Update items
* Delete items
* View total bill amount


---

# Tech Stack

| Technology       | Purpose              |
| ---------------- | -------------------- |
| ReactJS          | Frontend framework   |
| Vite             | Build tool           |
| Axios            | API requests         |
| React Router DOM | Routing              |
| Context API      | Authentication state |

---

# Project Structure

```txt
split-bill-ui/
 ├── src/
 │    ├── api/
 │    ├── components/
 │    ├── context/
 │    ├── pages/
 │    ├── App.jsx
 │    ├── main.jsx
 │    └── index.css
 ├── public/
 ├── .env
 ├── package.json
 └── vite.config.js
```

---

# Installation

## 1. Clone Repository

```bash
git clone <repository_url>
```

```bash
cd split-bill-ui
```

---

# Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the project root.

## .env

```env
VITE_API_URL=http://localhost:3000/api
```

---

# Start Development Server

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# Backend Requirement

The backend API must already be running.

Backend repository:

```txt
split-bill-api
```

Expected backend URL:

```txt
http://localhost:3000
```

---

# Authentication Flow

## Login

Users authenticate using:

```txt
POST /api/auth/login
```

JWT tokens are stored in:

```txt
localStorage
```

Axios automatically attaches:

```txt
Authorization: Bearer <token>
```

for protected requests.

---

# Available Screens

| Screen       | Description       |
| ------------ | ----------------- |
| Login        | User login        |
| Register     | User registration |
| Dashboard    | Main landing page |
| Bills        | Bills listing     |
| Bill Details | View bill items   |

---

# Routing

Uses React Router DOM.

## Routes

| Route        | Description  |
| ------------ | ------------ |
| `/`          | Login        |
| `/register`  | Register     |
| `/dashboard` | Dashboard    |
| `/bills`     | Bills page   |
| `/bills/:id` | Bill details |

---

# API Integration

Frontend communicates with backend using Axios.

## Axios Instance

Located at:

```txt
src/api/axios.js
```

Uses:

```js
import.meta.env.VITE_API_URL
```

for configurable environments.

---

# Running Tests

## Run Tests

```bash
npm test
```

---

# Recommended Seeded Login

| Email                                       | Password |
| ------------------------------------------- | -------- |
| [joseph@gmail.com](mailto:joseph@gmail.com) | 123456   |

---

# Proper Code Structure

## Pages

Application screens.

## Components

Reusable UI components.

## Context

Authentication state management.

## API

Axios configuration and API abstraction.

---

# Future Improvements

* Mobile responsive UI
* Toast notifications
* Dark mode
* Skeleton loaders
* React Query integration
* Redux or Zustand
* Real-time bill updates
* Better UI/UX design
* Form validation
* Unit tests

---

# Author

Joseph Bau
