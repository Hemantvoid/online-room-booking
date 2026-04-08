import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import AdminNav from "./components/AdminNav";
import ProtectedRoute from "./components/ProtectedRoute";

// USER PAGES
import HomePage from "./pages/HomePage";
import RoomDetailPage from "./pages/RoomDetailPage";
import MyBookings from "./pages/MyBookings";

// ADMIN PAGES
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRooms from "./pages/admin/AdminRooms";
import AdminProperties from "./pages/admin/AdminProperties";
import AdminBookings from "./pages/admin/AdminBookings";

// ---------------- LAYOUTS ----------------

const UserLayout = ({ children }) => (
  <>
    <Navbar />
    <div>{children}</div>
  </>
);

const AdminLayout = ({ children }) => (
  <>
    <AdminNav />
    <div>{children}</div>
  </>
);

// ---------------- APP ----------------

export default function App() {
  return (
    <Router>
      <Routes>
        {/* -------- USER ROUTES -------- */}
        <Route
          path="/"
          element={
            <UserLayout>
              <HomePage />
            </UserLayout>
          }
        />

        {/* ✅ FIXED: PLURAL rooms */}
        <Route
          path="/rooms/:id"
          element={
            <UserLayout>
              <RoomDetailPage />
            </UserLayout>
          }
        />

        <Route
          path="/my-bookings"
          element={
            <UserLayout>
              <MyBookings />
            </UserLayout>
          }
        />

        {/* -------- ADMIN LOGIN -------- */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* -------- ADMIN (PROTECTED) -------- */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/rooms"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminRooms />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/properties"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminProperties />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminBookings />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* -------- FALLBACK -------- */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
