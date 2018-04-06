# Movie-Collection-Weekend
Client Side
-[x] setup all file folders and dependencies.
-[x] set up client and route providers
-[ ] Set up HTML - Nav [x], Movies [x], Genres [ ]
-[x] Create controllers - Movies and genres
-[x] Inputs for: name, absolute image URL, release date, genere and runtime
-[x] Create GET movies to check communication
-[x] Create ADD movies to check they are logging
-[x] Create Delete to remove movie





Server Side 
-[x] Set up server and movie router
-[x] Set up database table for movies
-[ ] Set up database table for genres
-[x] set up pool to connect and adjust pool.js for DB





CREATE TABLE "movies" (
"id" serial primary key,
"name" varchar(80),
"pic" varchar(255),
"release_date" date,
"genre" varchar(120),
"run_time" integer
);
