export interface EmergencyContact {
  name: string;
  phone: string;
  relationship: string;
}

export interface EmployeeProfile {
  id: number;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  designation: string;
  department: string;
  avatar: string;
  emergencyContact: EmergencyContact;
}