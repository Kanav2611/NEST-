import { UserRole } from "@/lib/types";

const permissionMap: Record<UserRole, string[]> = {
  student: ["search_property", "raise_ticket", "book_visit", "download_receipt"],
  broker: ["manage_property", "manage_booking", "manage_lead", "broadcast_notice"],
  owner: ["view_portfolio", "view_earnings", "download_reports"],
  maintenance: ["accept_task", "update_task", "mark_complete"],
  security: ["verify_qr", "record_entry", "approve_delivery"],
  manager: ["assign_worker", "escalate_ticket", "view_analytics"],
  accountant: ["create_bill", "track_due", "reconcile_payment"]
};

export function hasPermission(role: UserRole, permission: string): boolean {
  return permissionMap[role].includes(permission);
}
