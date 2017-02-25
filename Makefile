render:
	hugo -t course

site:
	cd public; python -m SimpleHTTPServer 1313

serve:
	hugo server -t course -w

deploy:
	hugo -t course -d ../database-k12.github.io -b https://database-k12.github.io
	cd ../database-k12.github.io; \
		git add --all; git commit -m 'deploy'; git push

