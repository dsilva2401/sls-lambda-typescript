deploy-dev:
	@npm run build
	@sls deploy --stage dev