# Revenue Monitoring PWA

**A Progressive Web Application (PWA) dashboard for revenue monitoring with role-based access, charts, and KPI insights.**

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation & Running](#installation--running)
5. [Architecture & Folder Structure](#architecture--folder-structure)
6. [Usage](#usage)
7. [PWA & Performance](#pwa--performance)
8. [Future Improvements](#future-improvements)

---

## Project Overview

This project demonstrates a **full-stack-ready frontend PWA** for revenue monitoring.  
It includes role-based dashboards, KPI summaries, charts, filters, and interactive drill-downs.  
The application is built with **React, TypeScript, TailwindCSS, Redux Toolkit, and Recharts**, following best practices for modern web apps.

---

## Features

- **Role-Based Access**
    - `Admin`: Full dashboard view with interactive KPI drill-downs
    - `Viewer`: Read-only dashboard view
- **KPI Summary Cards**
    - Total Revenue, Monthly Growth, Alerts
    - Clickable for drill-down insights
- **Revenue Charts**
    - Line chart displaying revenue trends over months
    - Fully responsive and interactive
- **Filters**
    - Date range picker
    - Region selection
- **Drill-Down Modal**
    - Displays detailed revenue breakdown by region
- **PWA Ready**
    - Installable on desktop & mobile
    - Manifest + service worker configured
- **Error Handling & UX**
    - Global error boundary prevents white screens
    - Loading and empty states for robust UX
- **Performance Optimizations**
    - Lazy-loaded routes
    - Memoized heavy components

---

## Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: TailwindCSS
- **State Management**: Redux Toolkit
- **Charts**: Recharts
- **PWA Support**: Vite + Manifest + Service Worker
- **Routing**: React Router v6

---

## Installation & Running

1. Clone the repository:

```bash
git clone <repository_url>
cd revenue-monitoring-pwa
