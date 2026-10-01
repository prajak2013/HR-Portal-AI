const AUTH_KEY = "hr_portal_authenticated";

const DEMO_USER = {
    email: "employee@hrportal.com",
    password: "Employee@123",
    firstName: "Prajakta",
    lastName: "Kulkarni",
    designation: "Senior Software Engineer",
};

class AuthService {
    login(email: string, password: string): boolean {
        const isValid =
            email === DEMO_USER.email &&
            password === DEMO_USER.password;

        if (isValid) {
            localStorage.setItem(AUTH_KEY, "true");
        }

        return isValid;
    }

    logout(): void {
        localStorage.removeItem(AUTH_KEY);
    }

    isAuthenticated(): boolean {
        return localStorage.getItem(AUTH_KEY) === "true";
    }

    getUser() {
        return {
            firstName: DEMO_USER.firstName,
            lastName: DEMO_USER.lastName,
            email: DEMO_USER.email,
            designation: DEMO_USER.designation,
        };
    }

    getDemoCredentials() {
        return {
            email: DEMO_USER.email,
            password: DEMO_USER.password,
        };
    }
}

export default new AuthService();