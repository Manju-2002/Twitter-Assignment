# Simplified Twitter-Like Backend System

## Overview

This project is a simplified backend system for a Twitter-like application, built using Node.js and MongoDB. The system includes user registration, authentication, posting tweets, and fetching user timelines.

## API Endpoints

### User Registration
- `POST /api/users/register`
  - Body: `{ "username": "string", "password": "string" }`
  - Response: `{ "message": "User registered successfully" }`

### User Login
- `POST /api/users/login`
  - Body: `{ "username": "string", "password": "string" }`
  - Response: `{ "token": "JWT token" }`

### Post a Tweet
- `POST /api/tweets`
  - Headers: `{ "Authorization": "Bearer JWT token" }`
  - Body: `{ "text": "string" }`
  - Response: `{ "message": "Tweet posted successfully" }`

### Fetch User Timeline
- `GET /api/users/:userId/timeline`
  - Response: `[{ "_id": "tweetId", "userId": "userId", "text": "string", "createdAt": "date" }]`

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your `.env` file with your MongoDB URI and JWT secret
4. Start the server: `node server.js`
