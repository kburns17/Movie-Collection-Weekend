CREATE TABLE "movies" (
"id" serial primary key,
"name" varchar(80),
"pic" varchar(255),
"release_date" date,
"genre" varchar(120),
"run_time" integer
);

INSERT INTO "movies" ("name", "pic", "release_date", "genre", "run_time") 
VALUES ('Logan', 'pic', 2017, 'Action', 120);