start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run
	
install:
	npm install
	npm publish --dry-run
	sudo npm link

lint:	
	npx eslint .