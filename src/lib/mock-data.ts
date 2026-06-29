import { Lead, Property, Ticket } from "@/lib/types";

export const properties: Property[] = [
  {
    id: "p1",
    name: "Nest Maple Residency",
    address: "Sector 18, Knowledge Park, Noida",
    universityGateDistanceKm: 1.2,
    city: "Noida",
    gender: "Girls",
    rentInr: 7800,
    depositInr: 8000,
    sharingType: "Double",
    amenities: ["WiFi", "Food", "Laundry", "AC", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1600&q=80"
    ],
    mapUrl: "https://maps.google.com",
    occupancy: {
      totalRooms: 120,
      occupiedRooms: 102,
      reservedRooms: 9
    }
  },
  {
    id: "p2",
    name: "Nest Cedar Living",
    address: "Near Gate 3, Civil Lines, Prayagraj",
    universityGateDistanceKm: 0.8,
    city: "Prayagraj",
    gender: "Co-ed",
    rentInr: 9200,
    depositInr: 10000,
    sharingType: "Single",
    amenities: ["WiFi", "Attached Bathroom", "AC", "Gym Access"],
    images: [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1600&q=80",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ],
    mapUrl: "https://maps.google.com",
    occupancy: {
      totalRooms: 84,
      occupiedRooms: 66,
      reservedRooms: 7
    }
  },
  {
    id: "p3",
    name: "Nest Oak Student Hub",
    address: "University Road, Bhopal",
    universityGateDistanceKm: 2.1,
    city: "Bhopal",
    gender: "Boys",
    rentInr: 6500,
    depositInr: 7000,
    sharingType: "Triple",
    amenities: ["Food", "Laundry", "Study Area", "Water Purifier"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ],
    mapUrl: "https://maps.google.com",
    occupancy: {
      totalRooms: 150,
      occupiedRooms: 126,
      reservedRooms: 12
    }
  }
];

export const tickets: Ticket[] = [
  {
    id: "TCK-1001",
    title: "Bathroom leakage in wash area",
    category: "Plumbing",
    status: "In Progress",
    priority: "High",
    assignedWorker: "Ravi (Plumber)",
    roomNumber: "B-210",
    studentName: "Aditi Sharma",
    slaDueAt: "2026-06-30T16:00:00Z",
    rating: 4
  },
  {
    id: "TCK-1002",
    title: "WiFi downtime after 10 PM",
    category: "WiFi",
    status: "Assigned",
    priority: "Medium",
    assignedWorker: "Faisal (Internet Technician)",
    roomNumber: "C-305",
    studentName: "Priyansh Gupta",
    slaDueAt: "2026-06-30T10:00:00Z"
  },
  {
    id: "TCK-1003",
    title: "Emergency: Spark in switch board",
    category: "Emergency",
    status: "Escalated",
    priority: "Critical",
    assignedWorker: "Sunil (Electrician)",
    roomNumber: "A-102",
    studentName: "Neha Khan",
    slaDueAt: "2026-06-29T12:00:00Z",
    rating: 2
  }
];

export const leads: Lead[] = [
  {
    id: "L-01",
    studentName: "Krish Verma",
    query: "Girls PG under 8k near Gate 3 with food",
    stage: "Visit Scheduled",
    source: "Website"
  },
  {
    id: "L-02",
    studentName: "Manya Singh",
    query: "Single AC room with attached bathroom",
    stage: "Negotiation",
    source: "Referral"
  },
  {
    id: "L-03",
    studentName: "Aryan Das",
    query: "Co-ed shared room near coaching hub",
    stage: "Contacted",
    source: "Walk-in"
  }
];
