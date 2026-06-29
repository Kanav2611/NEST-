import { UserRole } from "@/lib/types";

export interface DemoAuthUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export const demoAuthUsers: DemoAuthUser[] = [
  {
    id: "u-student-1",
    name: "Aditi Sharma",
    email: "student@nest.app",
    password: "student123",
    role: "student"
  },
  {
    id: "u-broker-1",
    name: "Rahul Broker",
    email: "broker@nest.app",
    password: "broker123",
    role: "broker"
  },
  {
    id: "u-owner-1",
    name: "Karan Owner",
    email: "owner@nest.app",
    password: "owner123",
    role: "owner"
  },
  {
    id: "u-maintenance-1",
    name: "Ravi Worker",
    email: "maintenance@nest.app",
    password: "maintenance123",
    role: "maintenance"
  },
  {
    id: "u-security-1",
    name: "Suresh Guard",
    email: "security@nest.app",
    password: "security123",
    role: "security"
  },
  {
    id: "u-manager-1",
    name: "Meera Manager",
    email: "manager@nest.app",
    password: "manager123",
    role: "manager"
  },
  {
    id: "u-accountant-1",
    name: "Anil Accountant",
    email: "accountant@nest.app",
    password: "accountant123",
    role: "accountant"
  }
];
