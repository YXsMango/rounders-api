SERVICE = srv-rounders

d-build:
	docker build -t $(SERVICE) .

d-run:
	docker container run -d -p 3000:3000 $(SERVICE)

db-init:
	npm run db:init

db-seed:
	npm run db:seed

run:
	npm run dev
