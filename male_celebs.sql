create database male_celebs;

use male_celebs;

create table male_contest(
	id INT PRIMARY KEY,
    name varchar(200) NOT NULL,
    img varchar(200) NOT NULL
);

insert into male_contest
values
(100,'Hritik Roshan','https://i.pinimg.com/736x/be/2d/7a/be2d7adb6a8ac683485fe68c774a21a0.jpg'),
(101,'Chris Evans','https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/evans_2.jpg'),
(102,'Chris Hemsworth','https://images.toofab.com/image/dd/4by3/2020/05/05/dd04ae47c0b8445883b60cdb87a6fe88_md.jpg'),
(103,'Christiano Ronaldo','https://i.pinimg.com/736x/1b/6e/28/1b6e28270b55fcccd05294c0ce09e006.jpg'),
(104,'Tom Cruise','https://i.pinimg.com/736x/96/93/1c/96931ca12fa432a84f37f7d7fc7b82c8.jpg'),
(105,'Zayn Malik','https://i.pinimg.com/564x/6c/0b/eb/6c0bebbe0ca6e71f2fc8bdf95fa4d2a4.jpg'),
(106,'Harry Styles','https://cdn.britannica.com/07/222807-050-50D5DC99/English-singer-songwriter-actor-Harry-Styles-2020.jpg'),
(107,'Leonardo Dicaprio','https://ih1.redbubble.net/image.1123309417.0874/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'),
(108,'Aaron Taylor-Johnson','https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUpEWc2OxwMopwnuqGwD3qpbfGnJoZ2AKU17obpYaqRB2FrM9RtVXhzvi57IFla4Maot3i5Ci_LJU6xmnOFfd8Fg'),
(109,'Robert Pattinson','https://hips.hearstapps.com/hmg-prod/images/mh-actor-robert-pattinson-attends-the-opening-ceremony-of-the-news-photo-1066870216-1558057792.jpg?crop=0.621xw:0.932xh;0.240xw,0.0675xh&resize=640:*'),
(110,'David Beckham','https://compass-media.vogue.it/photos/5be3288a17f7d0001179b53b/2:3/w_2560%2Cc_limit/beckham_588x0.jpg'),
(111,'Henry Cavill','https://i.pinimg.com/564x/52/4f/8e/524f8ed18a71522ff9dd29dd78bd2b69.jpg'),
(112,'Andrew Garfield','https://imagenes.elpais.com/resizer/v2/Y6JJFJHV5JH3JAHJCFHNSDT3BQ.jpg?auth=64a2c9c933bcac30e41366c1410f80227928e7799cf946c01c1acb8182bb51e5&width=1960&height=1470&focal=4185%2C1981'),
(113,'Kaartik Aryan','https://mumbaimirror.indiatimes.com/thumb/67765944.cms?resizemode=4&width=400'),
(114,'Shahid Kapoor','https://shahidkapoorinfo.com/wp-content/uploads/2023/09/shahidkapoor-31-08-2023-0004-819x1024.jpg'),
(115,'Michael Jackson','https://images.saymedia-content.com/.image/t_share/MTczOTcyNjczMjg5MzMyMDE5/the-changing-face-of-michael-jackson.jpg'),
(116,'Tom Hiddleston','https://cdn.britannica.com/12/215012-050-19D71F2D/English-actor-Tom-Hiddleston-2018.jpg'),
(117,'Tom Holland','https://64.media.tumblr.com/5dbbc1e0ba22ba7edf7da1e65dcb0b49/4d2abf6c9836a47a-25/s1280x1920/c416b5ba4ae7138e40cc3ff1945fc582e9169a08.png'),
(119,'Virat Kohli','https://cornerstone.in/wp-content/uploads/2022/05/Cj-Puma-VK-SS-22_0426-1.jpg');

insert into male_contest
values
(120,'Ian Somerhalder','https://media.themoviedb.org/t/p/w500/x0pfPTV0ryFmhz4fju3Depx4NLp.jpg'),
(121,'Shubman Gill','https://i.pinimg.com/736x/07/bc/8f/07bc8fe9fefb4c2f091d4329693ad594.jpg');

insert into male_contest
values
(122,'Vicky Kaushal','https://images.tribuneindia.com/cms/gall_content/2018/7/2018_7$largeimg27_Friday_2018_235436688.jpg'),
(123,'Vidyut Jaamwal','https://media.themoviedb.org/t/p/w500/fs5kBOtxDvK77P33n6o1jBc7Aip.jpg'),
(124,'Varun Dhawan','https://media.themoviedb.org/t/p/w500/fs5kBOtxDvK77P33n6o1jBc7Aip.jpg'),
(125,'Shah Rukh Khan','https://www.koimoi.com/wp-content/new-galleries/2020/02/throwbackthursday-when-shah-rukh-khan-said-till-we-make-films-therell-be-people-out-there-waiting-to-watch-me-001.jpg'),
(126,'Benedict Cumberbatch','https://hips.hearstapps.com/hmg-prod/images/210728-se-esquire-benedict-cumberbatch-shot-03-397-fin1-flat-1-1636369166.png'),
(127,'Daniel Radcliffe','https://cdn.britannica.com/43/237443-050-C81087AD/Daniel-Radcliffe-2022-London-England.jpg'),
(128,'Goong Yoo','https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/gong_yoo.png'),
(129,'Brad Pritt','https://i.pinimg.com/736x/d9/df/62/d9df6272ffa10c518e95ab6d7902ecff.jpg');

ALTER TABLE male_contest  
ADD COLUMN elo INT DEFAULT 1000;

select * from male_contest;