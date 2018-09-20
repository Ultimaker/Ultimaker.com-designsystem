.PHONY: test build

define docker-node-run
    docker run --rm -v `pwd`:/app --workdir=/app node:8.11.3 $1
endef

install:
	$(call docker-node-run, npm install)

rebuild:
	$(call docker-node-run, npm rebuild)

build:
	$(call docker-node-run, npm run build)

build-storybook:
	$(call docker-node-run, npm run build-storybook)

run:
	$(call docker-node-run, npm run storybook)

unit:
	$(call docker-node-run, npm run unit)

snapshots:
	$(call docker-node-run, npm run snapshots)

k8s-local:
	kubectl config use-context docker-for-desktop || exit 1
	docker build -f docker/nginx/Dockerfile -t registry.k8s.local/storybook/nginx:dev .
	docker push registry.k8s.local/storybook/nginx:dev
	docker build -f docker/nodejs/Dockerfile -t registry.k8s.local/storybook/node:dev .
	docker push registry.k8s.local/storybook/node:dev
	kubectl apply -R -f k8s/local
