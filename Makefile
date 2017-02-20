render:
	hugo -t course

serve:
	hugo server -t course -w

deploy:
	hugo -t course -d ../database-k12.github.io -b https://database-k12.github.io

