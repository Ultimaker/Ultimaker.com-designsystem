.PHONY: test build

define docker-node-run
  docker run --rm \
    --user `id -u`:`id -g` \
    --volume `pwd`:/app \
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

snapshots:
	$(call docker-node-run,npm run snapshots)

shell:
	docker run --rm --tty --interactive \
		--user `id -u`:`id -g` \
		--volume `pwd`:/app \
		--workdir /app \
		node:10.15-alpine sh
