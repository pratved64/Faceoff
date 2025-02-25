CREATE DATABASE updated_db;

USE updated_db;



CREATE TABLE contestant(
   id         INT NOT NULL PRIMARY KEY 
  ,name       VARCHAR(18) NOT NULL
  ,image_path VARCHAR(202) NOT NULL
);

INSERT INTO contestant
VALUES
(100,'Emma Watson','https://media.themoviedb.org/t/p/w500/A14lLCZYDhfYdBa0fFRpwMDiwRN.jpg'),
(101,'Jennifer Lawrence','https://goldenglobes.com/wp-content/uploads/2023/10/jennifer-lawrence-nom-pro-gettyimages-1357366854.jpg?w=1240'),
(102,'Gal Gadot','https://israeled.org/wp-content/uploads/2018/04/gal-gadot.jpg'),
(103,'Margot Robbie','https://goldenglobes.com/wp-content/uploads/2023/10/margot-robbie_gettyimages-1159264558.jpg'),
(104,'Kiara Advani','https://rukminim2.flixcart.com/image/850/1000/xif0q/sticker/y/c/f/medium-kiara-advani-wall-sticker-actress-kiara-advani-wall-original-imags6zzzfjcpsz4.jpeg?q=90&crop=false'),
(105,'Elizabeth Olsen','https://www.pressherald.com/wp-content/uploads/sites/4/2018/09/1582310_TV_Elizabeth_Olsen_55839.jp_.jpg?w=774'),
(106,'Jenna Ortega','https://media.themoviedb.org/t/p/w500/q1NRzyZQlYkxLY07GO9NVPkQnu8.jpg'),
(107,'Saddie Sink','https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxNDU0MDM0OTQ5ODQyNTMw/sadie-sink-chanel-event.jpg'),
(108,'Milly Bobby Brown','https://media.glamourmagazine.co.uk/photos/626c123bd9c995304913c7aa/1:1/w_1920,h_1920,c_limit/MILLIE%20BOBBY%20BROWN%20290422%20GettyImages-1181658863b.jpg'),
(109,'Megan Foxx','https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/283805_v9_ba.jpg'),
(110,'Sydney Sweeney','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLXf-bHEdb2DgalFZ5jvfjlNjCGSjkCcD3A&s'),
(111,'Madison Beer','https://people.com/thmb/djHIbpwxDIrmxm1qxvQWxxKLsHU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(730x230:732x232)/Madison-Beer-singer-082924-tout-45187f78314b4dca8eed6919b49d8a2e.jpg'),
(112,'Anna De Armas','https://image.tmdb.org/t/p/original/5Qne374OM0ewMM7uSN9eq9jNrWq.jpg'),
(113,'Kendall Jenner','https://upload.wikimedia.org/wikipedia/commons/8/8e/Kendall_Jenner_Vogue_2022_%28cropped%29_%282%29.jpg'),
(114,'Scarlett Johnson','https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Scarlett_Johansson_by_Gage_Skidmore_2019.jpg/1200px-Scarlett_Johansson_by_Gage_Skidmore_2019.jpg'),
(115,'Sabrina Carpenter','https://media.themoviedb.org/t/p/w500/o0anvGEg34MzoNh6hbJHthB3paF.jpg'),
(116,'Shraddha Kapoor','https://media.themoviedb.org/t/p/w500/o0anvGEg34MzoNh6hbJHthB3paF.jpg'),
(117,'Ariana Grande','https://www.usatoday.com/gcdn/presto/2022/10/26/USAT/9d9ce87c-9685-4096-b4c1-77942197f57f-AFP_AFP_1OE91Z.JPG?crop=2736,2052,x3,y207'),
(118,'Dua Lipa','https://www.gramodesky.cz/storage/images/artist-dua-lipa.jpg.webp'),
(119,'Emma Stone','https://www.gramodesky.cz/storage/images/artist-dua-lipa.jpg.webp'),
(120,'Alexandra Daddario','https://static.wikia.nocookie.net/live-action/images/c/c9/Alexandra_Daddario.PNG/revision/latest/scale-to-width-down/284?cb=20170324140229'),
(121,'Rachel Weisz','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrxcUeGKB36EqyDgGRBtGZhKOTD4zq5Kpza5ZR3gAfwx8MAFwyyqE-cE9JVnLAhfSfHXkI2UX2T6KrS_TC87zUQ'),
(122,'Amber Heard','https://images.mid-day.com/images/images/2023/may/amber-heard-quits_d.jpg'),
(123,'Hailee Steinfield','https://m.media-amazon.com/images/M/MV5BYjg0MjA4OGEtMTc1ZS00ZmJhLTgyYjItMTY4YjI0NjVjNjllXkEyXkFqcGc@._V1_.jpg'),
(124,'Hannah Caramy','https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Factor%2F658497%2Fphoto%2F647f9f3620e6a.jpg&w=640&q=75');

select * from contestant;