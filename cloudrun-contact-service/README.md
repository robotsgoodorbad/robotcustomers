# Robot Customers Cloud Run Contact Service

Minimal Node.js (ESM) Express API for handling contact form submissions and sending email via Gmail SMTP with an app password.

## Endpoints

- `GET /health` -> `{ "ok": true }`
- `POST /contact`

## Request Body (`POST /contact`)

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hello from the contact form.",
  "company": ""
}
```

- `company` is an optional honeypot field.
- If `company` is non-empty, the service returns `200 { "ok": true }` and does nothing.

## Required Environment Variables

- `CONTACT_FROM_EMAIL` (your Gmail address sending mail)
- `CONTACT_TO_EMAIL` (recipient inbox)
- `GMAIL_APP_PASSWORD` (Gmail app password)
- `ALLOWED_ORIGIN` (single allowed browser origin, e.g. `https://robot-customers.web.app`)

Optional:

- `PORT` (default `8080`)
- `RATE_LIMIT_MAX` (default `10`)
- `RATE_LIMIT_WINDOW_MS` (default `900000` = 15 min)

## Run Locally

```bash
cd cloudrun-contact-service
npm install
export CONTACT_FROM_EMAIL="you@gmail.com"
export CONTACT_TO_EMAIL="you@gmail.com"
export GMAIL_APP_PASSWORD="your_app_password"
export ALLOWED_ORIGIN="http://localhost:3000"
npm start
```

## Curl Test

```bash
curl -i -X POST "http://localhost:8080/contact" \
  -H "Content-Type: application/json" \
  -H "Origin: http://localhost:3000" \
  -d '{
    "name":"Test User",
    "email":"test@example.com",
    "message":"This is a test inquiry.",
    "company":""
  }'
```

## Cloud Run Deploy (Build from Source)

Run from the `cloudrun-contact-service` directory:

```bash
gcloud config set project YOUR_PROJECT_ID
gcloud run deploy robotcustomers-contact \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars CONTACT_FROM_EMAIL=you@gmail.com,CONTACT_TO_EMAIL=you@gmail.com,ALLOWED_ORIGIN=https://robot-customers.web.app \
  --set-secrets GMAIL_APP_PASSWORD=gmail-app-password:latest
```

## Secret Manager Setup

Create secret:

```bash
printf "YOUR_GMAIL_APP_PASSWORD" | gcloud secrets create gmail-app-password --data-file=-
```

If the secret already exists, add a new version:

```bash
printf "YOUR_GMAIL_APP_PASSWORD" | gcloud secrets versions add gmail-app-password --data-file=-
```

Grant Cloud Run runtime service account permission to access the secret:

```bash
PROJECT_NUMBER="$(gcloud projects describe YOUR_PROJECT_ID --format='value(projectNumber)')"
SERVICE_ACCOUNT="${PROJECT_NUMBER}-compute@developer.gserviceaccount.com"
gcloud secrets add-iam-policy-binding gmail-app-password \
  --member="serviceAccount:${SERVICE_ACCOUNT}" \
  --role="roles/secretmanager.secretAccessor"
```
