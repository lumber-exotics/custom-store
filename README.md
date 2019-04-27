# custom-store
Build the fancy keyboard wrist rest of your dreams


    List of relations
 Schema | Name  | Type  | Owner
--------+-------+-------+-------
 public | stain | table | 
 public | wood  | table | 




store-# CREATE TABLE wood(
store(# TYPE varchar(50),
store(# IMAGEURL varchar,
store(# DESCRIPTION varchar,
store(# PRICE numeric (10, 2),
store(# QUANTITY BOOLEAN);


store-# CREATE TABLE stain(
store(# TYPE varchar(50),
store(# IMAGEURL varchar,
store(# DESCRIPTION varchar,
store(# PRICE numeric (10, 2),
store(# QUANTITY BOOLEAN);

//notes for shell postgresSQL insert 
//all caps - INSERT INTO
//double quotes table name
//open parenthesis
//no quotes for column, and comma after
//close parens, but no ;
//all lower case values
//open parens;
//single quote ONLY for value strings
//close parens, and ;

 INSERT INTO "wood" (TYPE, IMAGEURL, DESCRIPTION, PRICE, IN_STOCK) values ('redoak', 'https://imgur.com/KACe4VK', 'Top of the line, solid wood imported from the western states', 29.99, true);

 //hotkey - control C to exit to main menu, but not DB