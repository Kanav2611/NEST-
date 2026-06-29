export type UserRole =
  | "student"
  | "broker"
  | "owner"
  | "maintenance"
  | "security"
  | "manager"
  | "accountant";

export type TicketStatus =
  | "Created"
  | "Assigned"
  | "Accepted"
  | "In Progress"
  | "Completed"
  | "Student Feedback"
  | "Escalated";

export type TicketPriority = "Low" | "Medium" | "High" | "Critical";

export interface Property {
  id: string;
  name: string;
  address: string;
  universityGateDistanceKm: number;
  city: string;
  gender: "Boys" | "Girls" | "Co-ed";
  rentInr: number;
  depositInr: number;
  sharingType: "Single" | "Double" | "Triple";
  amenities: string[];
  images: string[];
  mapUrl: string;
  occupancy: {
    totalRooms: number;
    occupiedRooms: number;
    reservedRooms: number;
  };
}

export interface Ticket {
  id: string;
  title: string;
  category:
    | "Plumbing"
    | "Electrical"
    | "Carpentry"
    | "WiFi"
    | "Water"
    | "Cleaning"
    | "Pest Control"
    | "Billing"
    | "Room Change"
    | "Deposit Refund"
    | "Suggestion"
    | "General Query"
    | "Emergency";
  status: TicketStatus;
  priority: TicketPriority;
  assignedWorker: string;
  roomNumber: string;
  studentName: string;
  slaDueAt: string;
  rating?: number;
}

export interface Lead {
  id: string;
  studentName: string;
  query: string;
  stage:
    | "New Inquiry"
    | "Contacted"
    | "Visit Scheduled"
    | "Visited"
    | "Negotiation"
    | "Booked"
    | "Moved In";
  source: "Website" | "Referral" | "Walk-in";
}
