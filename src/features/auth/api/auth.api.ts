// src/features/auth/api/auth.api.ts

export const loginRequest = async (credentials: any) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulación lógica de roles por email
  if (credentials.password === "123456") {
    if (credentials.email === "admin@ejemplo.com") {
      return {
        user: {
          id: "1",
          name: "Admin Pro",
          email: "admin@ejemplo.com",
          roles: ["buyer", "vendor"],
        },
        token: "jwt-all",
      };
    }
    if (credentials.email === "vendedor@ejemplo.com") {
      return {
        user: {
          id: "2",
          name: "Juan Vendedor",
          email: "vendedor@ejemplo.com",
          roles: ["vendor"],
        },
        token: "jwt-vendor",
      };
    }
    if (credentials.email === "comprador@ejemplo.com") {
      return {
        user: {
          id: "3",
          name: "Maria Compradora",
          email: "comprador@ejemplo.com",
          roles: ["buyer"],
        },
        token: "jwt-buyer",
      };
    }
  }

  throw new Error("Credenciales inválidas");
};
