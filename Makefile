.PHONY: test build

uid = $(shell id -u)
gid = $(shell id -g)
pwd = $(shell pwd)

define docker-node-run
  docker run --rm \
    --user $(uid):$(gid) \
    --tmpfs /.npm \
    --volume $(pwd):/app:delegated \
    --workdir /app \
    node:10.15-alpine $1
endef

install:
	$(call docker-node-run,npm install)

rebuild:
	$(call docker-node-run,npm rebuild)

build:
	$(call docker-node-run,npm run build)

build-storybook:
	$(call docker-node-run,npm run build-storybook)

run:
	$(call docker-node-run,npm run storybook)

unit:
	$(call docker-node-run,npm run unit)


shell:
	docker run --rm \
	  --tty --interactive \
	  --user $(uid):$(gid) \
	  --tmpfs /.npm \
	  --volume $(pwd):/app:delegated \
	  --workdir /app \
	  node:10.15-alpine sh
