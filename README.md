# Security Frontend – x-api-key Anti-Pattern Demo

A minimal frontend that consumes the Security Backend API using the `x-api-key` header.

## Setup

1. Start the backend first (see the `security-api` repository).
2. Open `index.html` in your browser.

## Files

- `index.html` – page structure
- `styles.css` – styling
- `app.js` – fetch calls with `x-api-key` header

## Usage

Click **Get Protected Data** to call `GET /api/data` or **Send POST Request** to call `POST /api/data`. The API response is displayed on the page.
