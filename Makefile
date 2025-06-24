# Makefile

# Build all services
build:
	docker compose build

# Start all services
up:
	docker compose up

# Start in background
up-detached:
	docker compose up -d

# Stop all services
down:
	docker compose down

# Rebuild and start fresh
rebuild:
	docker compose down
	docker compose up --build

# Show logs
logs:
	docker compose logs -f

# Execute shell inside frontend container
frontend-sh:
	docker compose exec frontend sh

# Execute shell inside backend container
backend-sh:
	docker compose exec backend sh
