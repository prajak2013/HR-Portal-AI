import { employeeProfile } from "../data/profile.mock";

import type { EmployeeProfile } from "../types";

class ProfileService {
  async getProfile(): Promise<EmployeeProfile> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(employeeProfile);
      }, 800);
    });
  }

  async updateProfile(
    profile: EmployeeProfile
  ): Promise<EmployeeProfile> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(profile);
      }, 1000);
    });
  }
}

export default new ProfileService();