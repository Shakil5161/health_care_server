import express from 'express';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AppointmentRoutes } from '../modules/appointment/appointment.route';
import { authRoutes } from '../modules/auth/auth.route';
import { DoctorRoutes } from '../modules/doctor/doctor.route';
import { doctorScheduleRoutes } from '../modules/doctorSchedule/doctorSchedule.route';
import { PatientRoutes } from '../modules/patient/patient.route';
import { PrescriptionRoutes } from '../modules/prescription/prescription.route';
import { scheduleRoutes } from '../modules/schedule/schedule.route';
import { SpecialtiesRoutes } from '../modules/specialties/specialties.routes';
import { userRoutes } from '../modules/user/user.route';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/user',
        route: userRoutes
    },
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/schedule',
        route: scheduleRoutes
    },
    {
        path: '/doctor-schedule',
        route: doctorScheduleRoutes
    },
    {
        path: '/specialties',
        route: SpecialtiesRoutes
    },
    {
        path: '/doctor',
        route: DoctorRoutes
    },
    {
        path: '/admin',
        route: AdminRoutes
    },
    {
        path: '/patient',
        route: PatientRoutes
    },
    {
        path: '/appointment',
        route: AppointmentRoutes
    },
    {
        path: '/prescription',
        route: PrescriptionRoutes
    }

];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;