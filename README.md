# 🧩 Dynamic Form Builder

A full-stack web application to create, manage, and fill dynamic forms built with **React.js**, **Node.js (Express)**, **MongoDB**, and **Material-UI**. Users can:

- Create forms with dynamic fields (text and checkbox).
- Add validations like required fields.
- View and submit form responses.
- Delete forms.
- View submitted responses.

---

## 🚀 Features

- 📄 Dynamic form field creation (Text Input, Checkbox)
- ✅ Required field validation
- 💾 Form and response storage in MongoDB
- 🧭 Form listing, viewing, and response display
- 🗑️ Delete form functionality
- 🌐 Responsive design using Material-UI
- 🔒 Validation before creation and submission

---

## 📁 Project Structure

dynamic-form-builder/
├── backend/
│ ├── controllers/
│ │ └── formController.js
│ ├── models/
│ │ ├── Form.js
│ │ └── Response.js
│ ├── routes/
│ │ └── formRoutes.js
│ ├── server.js
│ └── .env
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── api/
│ │ │ └── index.js
│ │ ├── components/
│ │ │ ├── FormBuilder.js
│ │ │ ├── FormList.js
│ │ │ └── FormView.js
│ │ ├── App.js
│ │ └── index.js
│ └── .env
├── README.md


---

## ⚙️ Tech Stack

- **Frontend**: React.js, React Router, Axios, Material-UI (MUI v5)
- **Backend**: Node.js, Express.js, CORS
- **Database**: MongoDB (Mongoose)
- **Other Tools**: dotenv, concurrently

---

## 🛠️ Setup Instructions

### 1. Clone the Repository
git clone https://github.com/yourusername/dynamic-form-builder.git
cd dynamic-form-builder

### 2. Backend Setup
cd backend
npm install

Create .env file in backend/:
MONGO_URI=database url

Start Backend Server
npm start

### 3. Frontend Setup
cd client
npm install

Start Frontend
npm start
