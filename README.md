# Hugo Inc. Homepage Clone (Vite + TypeScript)

This project is a clone of the Hugo Inc. homepage, rebuilt with Vite, React, and TypeScript for a more modern and efficient development experience.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm) installed on your machine.

### Installing

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2.  **Install frontend dependencies:**
    ```bash
    cd frontend
    npm install
    ```

3.  **Install backend dependencies:**
    ```bash
    cd ../backend
    npm install
    ```

### Running the Application

1.  **Build the React application:**
    The frontend is built using Vite. This command will generate the production-ready files in the `dist` folder.
    ```bash
    cd ../frontend
    npm run build
    ```

2.  **Start the Node.js server:**
    The backend server will serve the built frontend files.
    ```bash
    cd ../backend
    npm start
    ```

The application will be available at `http://localhost:3001`.

### Development Mode

If you want to run the frontend in development mode with hot-reloading:
```bash
cd frontend
npm run dev
```
The frontend development server will start, usually on `http://localhost:5173`.
