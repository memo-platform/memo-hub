# MEMO HUB

MEMO HUB is a modern enterprise resource planning platform built as a Next.js monorepo with a production-ready scaffold.

## Workspace Structure

- `apps/web` - Next.js 15 frontend application
- `apps/api` - Next.js 15 API application with Prisma and PostgreSQL
- `packages/ui` - Shared React UI components
- `packages/config` - Shared shared configuration and constants

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment files:
   - `apps/web/.env.local`
   - `apps/api/.env`

3. Add required variables:
   ```env
   DATABASE_URL=postgres://memo:memo123@localhost:5432/memo_hub
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=replace-with-a-secure-value
   ```

4. Generate Prisma client:
   ```bash
   npm run prisma:generate --workspace @memo-hub/api
   ```

5. Run the development server:
   ```bash
   npm run dev:web
   ```

## Docker

Run the full stack with Docker Compose:

```bash
docker compose up --build
```

## Scripts

- `npm run dev:web` - Start the web app in development
- `npm run dev:api` - Start the API app in development
- `npm run build` - Build all workspaces
- `npm run lint` - Lint the repository
- `npm run format` - Format files with Prettier

## Tooling

- ESLint with TypeScript and React rules
- Prettier formatting
- Husky pre-commit hook
- Tailwind CSS styling
- Prisma ORM for PostgreSQL
- NextAuth authentication

## Notes

This scaffold creates the project structure and starter pages. Final production deployment should include secure secret management, database migration flows, and authentication provider configuration.
