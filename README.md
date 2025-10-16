# TLT Portal - Professional Profile Management

A modern, responsive web application for creating and managing professional profiles, built with React, TypeScript, Vite, and shadcn/ui components.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Components](#components)
- [Pages](#pages)
- [Styling](#styling)
- [Routing](#routing)
- [Available Scripts](#available-scripts)

## Project Overview

The TLT Portal is a professional profile management application designed to help users create and maintain their professional profiles. The application features a clean, modern UI with responsive design principles, allowing users to input personal information, professional roles, specialties, and location details.

## Features

- Responsive profile creation form
- Form validation for user inputs
- Role and specialty selection
- Location selection (country and city)
- Producer designation checkbox
- Clean, modern UI with consistent styling
- Responsive design for all device sizes
- Error handling for invalid routes

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React
- **Validation**: Zod

## Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── ProfileForm.tsx     # Main profile creation form
│   └── ProfileHeader.tsx   # Application header
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── pages/
│   ├── Index.tsx           # Main page with profile form
│   └── NotFound.tsx        # 404 error page
├── App.tsx                 # Root application component
├── main.tsx                # Application entry point
└── vite-env.d.ts           # Vite environment types
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm, yarn, or bun package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd your-profile-page
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

The application will be available at `http://localhost:8080`.

### Build

Create a production build:

```bash
npm run build
# or
yarn build
# or
bun build
```

Preview the production build:

```bash
npm run preview
# or
yarn preview
# or
bun preview
```

## Components

### ProfileForm

The main profile creation form component located at [`src/components/ProfileForm.tsx`](file:///c%3A/Users/Piyush%20Mishra/Documents/Assessments/The%20Leadership%20Thread/TLT%20-%20Assignment%20for%20Full%20Stack%20Developer%20Role%20-%20V2/Your-Profile-Page/src/components/ProfileForm.tsx). It includes:

- First and last name inputs
- Email and mobile number fields
- Role selection dropdown (Producer, Director, Cinematographer, Editor, Sound Designer)
- Specialty type selection (Film Production, Commercial, Documentary, Music Video, Corporate Video)
- Producer checkbox
- Country and city selection dropdowns
- Submit and cancel buttons

### ProfileHeader

The application header component located at [`src/components/ProfileHeader.tsx`](file:///c%3A/Users/Piyush%20Mishra/Documents/Assessments/The%20Leadership%20Thread/TLT%20-%20Assignment%20for%20Full%20Stack%20Developer%20Role%20-%20V2/Your-Profile-Page/src/components/ProfileHeader.tsx). It displays:

- TLT Portal branding with building icon
- User profile section with avatar

## Pages

### Index

The main page component located at [`src/pages/Index.tsx`](file:///c%3A/Users/Piyush%20Mishra/Documents/Assessments/The%20Leadership%20Thread/TLT%20-%20Assignment%20for%20Full%20Stack%20Developer%20Role%20-%20V2/Your-Profile-Page/src/pages/Index.tsx) that renders the profile header and form.

### NotFound

The 404 error page component located at [`src/pages/NotFound.tsx`](file:///c%3A/Users/Piyush%20Mishra/Documents/Assessments/The%20Leadership%20Thread/TLT%20-%20Assignment%20for%20Full%20Stack%20Developer%20Role%20-%20V2/Your-Profile-Page/src/pages/NotFound.tsx) that handles undefined routes.

## Styling

The application uses Tailwind CSS for styling with a custom color palette defined in the [tailwind.config.ts](file:///c%3A/Users/Piyush%20Mishra/Documents/Assessments/The%20Leadership%20Thread/TLT%20-%20Assignment%20for%20Full%20Stack%20Developer%20Role%20-%20V2/Your-Profile-Page/tailwind.config.ts) file. shadcn/ui components are used for consistent UI elements with built-in accessibility support.

Custom colors are defined using CSS variables in the [src/index.css](file:///c%3A/Users/Piyush%20Mishra/Documents/Assessments/The%20Leadership%20Thread/TLT%20-%20Assignment%20for%20Full%20Stack%20Developer%20Role%20-%20V2/Your-Profile-Page/src/index.css) file.

## Routing

The application uses React Router v6 for client-side routing:

- `/` - Main profile page
- `*` - Catch-all route for 404 errors

Routes are defined in the [App.tsx](file:///c%3A/Users/Piyush%20Mishra/Documents/Assessments/The%20Leadership%20Thread/TLT%20-%20Assignment%20for%20Full%20Stack%20Developer%20Role%20-%20V2/Your-Profile-Page/src/App.tsx) file.

## Available Scripts

- `dev` - Start development server
- `build` - Create production build
- `build:dev` - Create development build
- `lint` - Run ESLint
- `preview` - Preview production build

Run scripts using npm, yarn, or bun:

```bash
npm run <script-name>
yarn <script-name>
bun run <script-name>
```