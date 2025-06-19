# Band Rehearsal Scheduler

A comprehensive web application for managing band rehearsals, tracking attendance, and suggesting optimal meeting times based on member availability.

## Features

- **User Management**
  - Account creation with role-based access control
  - Member profiles with instrument/role specifications
  - Authentication and authorization

- **Rehearsal Scheduling**
  - Create, edit and delete rehearsal events
  - Set location, duration, and required equipment
  - Recurring rehearsal options
  - Conflict detection with existing events

- **Availability Tracking**
  - Members can set regular weekly availability
  - One-off availability exceptions
  - Visual calendar of band availability

- **Smart Scheduling**
  - Automatically suggest optimal rehearsal times
  - Show attendance percentages for each time slot
  - Prioritize core members' availability

- **Notifications & Reminders**
  - Email/SMS rehearsal confirmations
  - Automated reminders (24h, 1h before rehearsal)
  - Last-minute change alerts

- **Attendance Tracking**
  - Check-in feature for rehearsals
  - Historical attendance records
  - Analytics on member participation

- **Resource Management**
  - Attach setlists to rehearsals
  - Share sheet music and recordings
  - Equipment requirements tracking

## Technology Stack

### Frontend
- React.js with TypeScript
- Redux Toolkit for state management
- Material-UI component library
- FullCalendar.js for calendar views
- Formik with Yup for form validation
- Axios for API communication

### Backend
- Node.js with Express.js
- RESTful API architecture
- JSON Web Tokens (JWT) for authentication
- Nodemailer with SendGrid for email notifications
- Twilio API for SMS notifications

### Database
- PostgreSQL
- Sequelize ORM
- Redis for caching and session management

### DevOps
- Docker containers
- GitHub Actions for CI/CD
- AWS (EC2, RDS, S3) for hosting
- Sentry for error tracking

## Getting Started

### Prerequisites
- Node.js (v16+)
- PostgreSQL (v13+)
- Redis (v6+)
- Docker and Docker Compose (optional)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/dxaginfo/band-rehearsal-scheduler-app-j72s9g.git
   cd band-rehearsal-scheduler-app-j72s9g
   ```

2. Install dependencies
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables
   ```bash
   # Server directory
   cp .env.example .env
   # Edit .env with your database credentials and API keys
   ```

4. Set up the database
   ```bash
   # In server directory
   npm run db:migrate
   npm run db:seed
   ```

5. Start the development servers
   ```bash
   # Start backend server (from server directory)
   npm run dev

   # Start frontend development server (from client directory)
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000`

### Using Docker (Alternative)

```bash
# Start all services
docker-compose up -d

# Access the application at http://localhost:3000
```

## Development

### Project Structure

```
band-rehearsal-scheduler/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   └── src/                # React source code
│       ├── assets/         # Images, fonts, etc.
│       ├── components/     # Reusable components
│       ├── hooks/          # Custom React hooks
│       ├── pages/          # Page components
│       ├── services/       # API service calls
│       ├── store/          # Redux store configuration
│       └── utils/          # Utility functions
│
├── server/                 # Backend Express application
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Express middleware
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   └── utils/              # Utility functions
│
├── docker/                 # Docker configuration
└── docs/                   # Documentation files
```

### API Documentation

API documentation is available at `/api/docs` when running the development server.

## Deployment

### Production Build

```bash
# Build frontend
cd client
npm run build

# Prepare backend for production
cd ../server
npm run build
```

### Deployment to AWS

Detailed deployment instructions are available in [DEPLOYMENT.md](./docs/DEPLOYMENT.md).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [FullCalendar.js](https://fullcalendar.io/) for the calendar implementation
- [Material-UI](https://mui.com/) for the UI components
- [SendGrid](https://sendgrid.com/) for email services
- [Twilio](https://www.twilio.com/) for SMS services