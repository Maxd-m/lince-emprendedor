# 🛒 E-Commerce Project - Frontend

Bienvenido al repositorio del frontend de nuestro e-commerce. Este proyecto está construido con React + TypeScript + Vite y utiliza Tailwind CSS con daisyUI para la interfaz.

## 🏗️ Arquitectura: Feature-Based (Vertical Slices)

Para facilitar el desarrollo en paralelo entre personas y evitar conflictos de código, hemos adoptado una Arquitectura basada en Funcionalidades (Features).

En lugar de agrupar archivos por tipo (todos los componentes en un lado, toda la lógica en otro), agrupamos todo lo relacionado con un dominio de negocio en una sola carpeta.

### Estructura de carpetas

```
src/
  components/     # Componentes de UI genéricos (botones, inputs de daisyUI)
  hooks/          # Hooks globales (ej. useLocalStorage)
  services/       # Clientes de API y configuraciones globales (Axios/Fetch)
  types/          # Tipos globales compartidos
  utils/          # Funciones de ayuda (formateo de moneda, fechas)
  pages/          # Rutas de la app (Solo ensamblan las features)

  features/       # <--- EL NÚCLEO DE LA APP
    admin-global/     # Panel para el Super Admin
    admin-vendor/     # Panel para el Vendedor
    auth/             # Login, Registro, Recuperar clave
    catalog-products/ # Visualización de productos para el cliente
    catalog-vendors/  # Directorio de vendedores para el cliente
    checkout/         # Carrito y proceso de pago
    ...
```

### Anatomía de una Feature

Cada carpeta dentro de features/ debe ser tratada como una "mini-aplicación" independiente. Una feature completa suele contener:

- api/: Funciones de llamada a la API y Hooks de TanStack Query exclusivos de la feature.
- components/: Componentes que solo se usan en esta funcionalidad.
- hooks/: Lógica de estado o efectos específicos de la feature.
- types/: Interfaces y tipos de TypeScript para los datos de esta funcionalidad.
- utils/: Lógica de validación o transformación de datos específica.
- index.ts: El Punto de Entrada (Public API).
