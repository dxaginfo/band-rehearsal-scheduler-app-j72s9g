import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Provider } from 'react-redux';

import theme from './theme';
import store from './store';

// Layout Components
import Layout from './components/layout/Layout';
import PrivateRoute from './components/auth/PrivateRoute';

// Public Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';

// Protected Pages
import DashboardPage from './pages/dashboard/DashboardPage';
import BandListPage from './pages/bands/BandListPage';
import BandDetailsPage from './pages/bands/BandDetailsPage';
import CreateBandPage from './pages/bands/CreateBandPage';
import RehearsalListPage from './pages/rehearsals/RehearsalListPage';
import RehearsalDetailsPage from './pages/rehearsals/RehearsalDetailsPage';
import CreateRehearsalPage from './pages/rehearsals/CreateRehearsalPage';
import ProfilePage from './pages/profile/ProfilePage';
import AvailabilityPage from './pages/availability/AvailabilityPage';
import ResourcesPage from './pages/resources/ResourcesPage';
import MembersPage from './pages/members/MembersPage';
import AttendancePage from './pages/attendance/AttendancePage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <Router>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />

              {/* Protected Routes - Wrapped with Layout */}
              <Route element={<Layout />}>
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <DashboardPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/bands"
                  element={
                    <PrivateRoute>
                      <BandListPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/bands/create"
                  element={
                    <PrivateRoute>
                      <CreateBandPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/bands/:bandId"
                  element={
                    <PrivateRoute>
                      <BandDetailsPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/rehearsals"
                  element={
                    <PrivateRoute>
                      <RehearsalListPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/rehearsals/create"
                  element={
                    <PrivateRoute>
                      <CreateRehearsalPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/rehearsals/:rehearsalId"
                  element={
                    <PrivateRoute>
                      <RehearsalDetailsPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/availability"
                  element={
                    <PrivateRoute>
                      <AvailabilityPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/members"
                  element={
                    <PrivateRoute>
                      <MembersPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/attendance"
                  element={
                    <PrivateRoute>
                      <AttendancePage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/resources"
                  element={
                    <PrivateRoute>
                      <ResourcesPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <ProfilePage />
                    </PrivateRoute>
                  }
                />
              </Route>

              {/* 404 Not Found */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;