# PDF to Word Converter

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white) ![Render](https://img.shields.io/badge/Render-0095D5?style=for-the-badge&logo=render&logoColor=white) ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)

## Overview

This **PDF to Word Converter** project allows users to upload a PDF file and convert it into a Word document (.docx). The application consists of a frontend built with React and a backend built using Flask. It is deployed on Render and Netlify to provide a seamless online document conversion experience, which can further be leveraged as **Software as a Service (SaaS)**.

### Live Demo

- [Frontend hosted on Netlify](https://sprightly-medovik-e5dd9a.netlify.app/)
- [Backend hosted on Render](https://pdftoword-zc14.onrender.com/)

## Features

- **PDF to Word Conversion**: Upload a PDF and download a Word (.docx) version.
- **Real-Time Progress Indicator**: Loading bar displaying percentage completion.
- **Simple Interface**: User-friendly design for ease of use.
- **Responsive Design**: Supports both mobile and desktop views.
- **Backend API Integration**: Seamless interaction between frontend and backend for conversion.

## Project Structure

### Files and Components

- **Frontend:**
  - **App.js**: Entry point for the React application that renders the `Dashboard` component.
  - **Dashboard.js**: Component handling file input, PDF conversion request, and downloading the Word file.
  - **Dashboard.css**: Styling for the `Dashboard` component to ensure a consistent and appealing user interface.
  - **index.js**: Renders the main `App` component and initializes the frontend.

- **Backend:**
  - **server.py**: Handles the backend logic using Flask, allowing the conversion from PDF to Word using the `pdf2docx` library.
  - **requirements.txt**: Lists all dependencies for the backend (e.g., Flask, pdf2docx).

- **General:**
  - **package.json**: Manages project dependencies and scripts for the frontend.
  - **index.html**: The main HTML template for the React application.

## Tech Stack

- **Frontend**: 
  - [React](https://reactjs.org/)
  - [Axios](https://axios-http.com/)
  - HTML, CSS for styling
- **Backend**: 
  - [Flask](https://flask.palletsprojects.com/)
  - [pdf2docx](https://pypi.org/project/pdf2docx/) for PDF conversion
- **Hosting**: 
  - [Netlify](https://www.netlify.com/) for the frontend
  - [Render](https://render.com/) for the backend

## Getting Started

### Prerequisites

- **Node.js** and **npm**: Install [Node.js](https://nodejs.org/).
- **Python 3**: Install [Python](https://www.python.org/downloads/).
- **Flask**: Install Flask using `pip install Flask`.
- **pdf2docx**: Install the library for PDF to Word conversion with `pip install pdf2docx`.

### Setup

1. **Clone the repository**:

   ```sh
   git clone https://github.com/karanbagle/PDFtoWord.git
   cd PDFtoWord
   ```

2. **Install frontend dependencies**:

   ```sh
   npm install
   ```

3. **Run the frontend locally**:

   ```sh
   npm start
   ```

4. **Backend setup**:

   - Navigate to the backend directory and create a virtual environment:
     ```sh
     python3 -m venv env
     source env/bin/activate
     ```
   - Install backend dependencies:
     ```sh
     pip install Flask pdf2docx flask-cors
     ```
   - Run the Flask server:
     ```sh
     python server.py
     ```

### Deployment

#### Frontend (Netlify)

- Deploy the frontend by connecting the GitHub repository to Netlify.
- Set the build command to `npm run build` and publish directory to `build`.

#### Backend (Render)

- Deploy the backend by connecting the GitHub repository to Render.
- Set up a Python environment, configure the `server.py` file to run as the entry point, and open port `5000`.

## How to Use as SaaS

This application can be used as a SaaS by providing the following features:

1. **Authentication and User Accounts**: Add a login and registration system to manage user sessions.
2. **Subscription Plans**: Integrate a payment gateway to allow users to subscribe for different usage plans (e.g., number of conversions per month).
3. **API Access**: Provide API access to users who want to use the document conversion service programmatically in their own applications.
4. **Custom Domains**: Allow users to use the service on custom domains for businesses or private use.

## Stack Icons
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
- ![Render](https://img.shields.io/badge/Render-0095D5?style=for-the-badge&logo=render&logoColor=white)
- ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or collaboration, reach out at [karanlalitbagle@gmail.com](mailto:karanlalitbagle@gmail.com).

