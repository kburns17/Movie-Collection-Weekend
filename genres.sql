CREATE TABLE "genres" (
"id" serial primary key,
"genre" varchar(80),
);

INSERT INTO "genres" ("genre") 
VALUES ('horror'), ('thriller'), ('action'), ('comedy'),('drama');