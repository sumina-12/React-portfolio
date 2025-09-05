# Portfolio Website Project

## Overview

This is a personal portfolio website built with React, TypeScript, and Vite. The project showcases a developer's work, skills, and contact information through a modern, responsive single-page application. The website features multiple sections including home, about, skills, projects, gallery, and contact areas, all designed to provide a comprehensive overview of the developer's professional profile. The site now includes an interactive gallery and AI chatbot for enhanced user engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### September 5, 2025 - Major Portfolio Enhancement
- **Component Refactoring**: Converted monolithic App.jsx into modular components
- **Gallery Addition**: Added interactive photo gallery with 7 personal photos
- **Chatbot Integration**: Implemented AI-powered virtual assistant
- **Enhanced Responsive Design**: Improved mobile and tablet compatibility
- **Navigation Update**: Added Gallery section to main navigation
- **CSS Enhancements**: Added extensive styling for gallery lightbox and chatbot interface

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with functional components and hooks
- **Build Tool**: Vite for fast development and optimized production builds
- **Language**: TypeScript support configured, though currently using JSX files
- **Styling**: CSS modules approach with component-specific styling
- **Responsive Design**: Mobile-first responsive design principles

### Component Structure
- **Modular Architecture**: Individual React components for each section (Header, Hero, About, Skills, Projects, Gallery, Contact, Chatbot)
- **Component-based Layout**: Organized into distinct reusable components in /src/components/
- **Fixed Navigation**: Sticky navigation bar with smooth scrolling between sections including new Gallery section
- **Interactive Elements**: Download buttons, contact forms, image gallery with lightbox, and AI chatbot
- **Gallery System**: Interactive photo gallery with hover effects, categories, and full-screen lightbox viewing
- **AI Chatbot**: Intelligent virtual assistant with quick replies and contextual responses about portfolio content

### Styling Architecture
- **CSS Organization**: Component-scoped styling with App.css as the main stylesheet
- **Animation Strategy**: CSS transitions and transforms for interactive elements
- **Design System**: Consistent color scheme with primary accent color (#6c63ff)
- **Layout Approach**: Flexbox and grid layouts for responsive positioning

### Development Configuration
- **Hot Module Replacement**: Vite's HMR for instant development feedback
- **TypeScript Integration**: Configured for gradual adoption with strict mode enabled
- **ES Modules**: Modern module system with ESNext target compilation
- **Development Server**: Configured to run on all network interfaces (0.0.0.0)

## External Dependencies

### Core Dependencies
- **React**: UI library for component-based architecture
- **React DOM**: DOM rendering capabilities for React components
- **Vite**: Build tool and development server with React plugin support

### Development Tools
- **TypeScript**: Type checking and enhanced developer experience
- **@vitejs/plugin-react**: Vite plugin for React support with JSX transformation
- **@types/react & @types/react-dom**: TypeScript definitions for React libraries

### Browser APIs
- **Smooth Scrolling**: Native browser scroll behavior for navigation
- **Backdrop Filter**: CSS backdrop-filter for glassmorphism effects in navigation
- **Responsive Design**: CSS media queries and viewport meta configuration

### Asset Management
- **Static Assets**: Favicon and images served through Vite's static asset handling
- **CSS Animations**: Native CSS transitions and keyframe animations
- **Font Integration**: System fonts with fallback stack for cross-platform compatibility