import { employeeProfile } from "../data/profile.mock";
import type { EmployeeProfile } from "../types";

let profileData: EmployeeProfile = { ...employeeProfile };

class ProfileService {
  async getProfile(): Promise<EmployeeProfile> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(profileData);
      }, 800);
    });
  }

  async updateProfile(
    profile: EmployeeProfile
  ): Promise<EmployeeProfile> {
    return new Promise((resolve) => {
      setTimeout(() => {
        profileData = { ...profile };
        resolve(profileData);
      }, 1000);
    });
  }
}

export default new ProfileService();