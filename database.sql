CREATE DATABASE "giphy_search_favorites";

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

insert into category ("name")
values ('actions'), ('adjectives'),
('animals'), ('anime'),('art & design'), ('cartoons & comics'),
('celebrites'), ('decades'),('emotions'), ('fashion & beauty'),
('food & drink'), ('gaming'), ('greetings'), ('holiday'),
('identity'), ('interests'),('memes'), ('movies'),
('music'), ('nature'), ('news & politics'), ('reactions'),
('science'), ('sports'),('stickers'), ('transportation'),
('tv'), ('weird');

select * from category order by name;

CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR(1000) NOT NULL,
	"category" varchar(25) DEFAULT NULL 
)

insert into favorites(url, category)
values('https://giphy.com/gifs/cat-kisses-hugs-MDJ9IbxxvDUQM', 'animals')

select * from favorites 