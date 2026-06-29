import { Ticket } from "@/lib/types";

interface TicketTableProps {
  tickets: Ticket[];
}

const statusTone: Record<Ticket["status"], string> = {
  Created: "bg-slate-100 text-slate-700",
  Assigned: "bg-blue-50 text-blue-700",
  Accepted: "bg-indigo-50 text-indigo-700",
  "In Progress": "bg-amber-50 text-amber-700",
  Completed: "bg-emerald-50 text-emerald-700",
  "Student Feedback": "bg-violet-50 text-violet-700",
  Escalated: "bg-rose-50 text-rose-700"
};

export function TicketTable({ tickets }: TicketTableProps) {
  return (
    <div className="card overflow-hidden">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            <th className="px-4 py-3">Ticket</th>
            <th className="px-4 py-3">Student</th>
            <th className="px-4 py-3">Priority</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Assigned</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="border-t border-slate-100">
              <td className="px-4 py-4">
                <p className="font-medium text-slate-800">{ticket.id}</p>
                <p className="text-xs text-slate-500">{ticket.title}</p>
              </td>
              <td className="px-4 py-4 text-slate-700">
                {ticket.studentName}
                <p className="text-xs text-slate-500">Room {ticket.roomNumber}</p>
              </td>
              <td className="px-4 py-4">{ticket.priority}</td>
              <td className="px-4 py-4">
                <span className={`badge ${statusTone[ticket.status]}`}>{ticket.status}</span>
              </td>
              <td className="px-4 py-4 text-slate-700">{ticket.assignedWorker}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
