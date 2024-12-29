# MAM Les Lémuriens - Website

A modern web application for a childcare facility (Maison d'Assistantes Maternelles) built with Angular and Symfony.

## 🌟 Features

- **Modern Stack**: Angular 17 frontend with Symfony 7 backend
- **Responsive Design**: Fully responsive UI using Tailwind CSS
- **Pre-registration System**: Online form for parents to pre-register their children
- **Content Management**: Easy-to-update pages for facility information
- **Secure Backend**: RESTful API with proper validation and error handling

## 🛠 Tech Stack

### Frontend
- Angular 17
- TailwindCSS
- TypeScript
- RxJS
- Angular Forms

### Backend
- Symfony 7
- PHP 8.2
- Doctrine ORM
- SQLite Database
- Nelmio CORS Bundle

## 📋 Pages

- Home
- About MAM
- Delegation
- Educational Project
- Schedule
- Pricing
- CAF Information
- Collective Agreement
- Pre-registration Form

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PHP 8.2+
- Composer

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/mam-lemuriens.git
cd mam-lemuriens
```

2. Install frontend dependencies
```bash
npm install
```

3. Install backend dependencies
```bash
cd symfony
composer install
```

4. Start the development servers

Frontend:
```bash
npm run dev
```

Backend:
```bash
cd symfony
php -S localhost:8000 -t public
```
