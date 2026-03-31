.PHONY: typecheck lint clean

typecheck:
	npx tsc --noEmit

lint:
	npx eslint src/ --max-warnings=0

clean:
	rm -rf dist/ *.tsbuildinfo
