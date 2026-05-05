// src/features/auth/api/auth.api.ts

// Simulación de una respuesta del servidor
export const loginRequest = async (credentials: any) => {
  // Simulamos un retraso de red de 1 segundo
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Datos estáticos de prueba
  if (
    credentials.email === "admin@ejemplo.com" &&
    credentials.password === "123456"
  ) {
    return {
      user: { id: "1", name: "Usuario Pro", email: "admin@ejemplo.com" },
      token: "jwt-token-falso-123",
    };
  }

  throw new Error("Credenciales inválidas");
};
