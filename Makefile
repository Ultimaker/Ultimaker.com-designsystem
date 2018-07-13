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