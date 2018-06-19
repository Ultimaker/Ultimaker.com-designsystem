.PHONY: test build

define docker-node-run
    docker run --rm -v `pwd`:/app --workdir=/app node:8.11.3 $1
endef

define docker-node-alpine-run
    docker run --rm -v `pwd`:/app --workdir=/app node:8.11.3-alpine $1
endef

install:
	$(call docker-node-alpine-run, npm install)
	$(call docker-node-alpine-run, npm rebuild)

build: build-storybook

build-storybook:
	$(call docker-node-alpine-run, npm run build-storybook)

run:
	$(call docker-node-alpine-run, npm run storybook)

unit:
	$(call docker-node-alpine-run, yarn install)
	$(call docker-node-alpine-run, npm rebuild)
	$(call docker-node-alpine-run, npm run unit:chrome)