drop
database hakimlivs;
create
database hakimlivs;
use
hakimlivs;

create table brand
(
    id    int         not null auto_increment primary key,
    brand varchar(50) not null
);

create table unit
(
    id       int         not null auto_increment primary key,
    unit     varchar(10) not null,
    longunit varchar(20) not null
);

create table category
(
    id       int         not null auto_increment primary key,
    category varchar(50) not null
);

create table orderStatus
(
    id          int         not null auto_increment primary key,
    orderstatus varchar(50) not null
);

create table city
(
    id   int not null auto_increment primary key,
    city varchar(50)
);

create table areaCode
(
    id       int not null auto_increment primary key,
    areacode int not null,
    city_id  int not null,
    foreign key (city_id) references city (id)
);

create table address
(
    id          int         not null auto_increment primary key,
    address     varchar(50) not null,
    areacode_id int         not null,
    foreign key (areacode_id) references areaCode (id)
);

create table product
(
    id          int            not null auto_increment primary key,
    name        varchar(100)   not null,
    price       decimal(10, 2) not null,
    description varchar(1000),
    inventory   int            not null default 0,
    size        int                     default 1,
    quantity    int                     default 1,
    category_id int,
    brand_id    int,
    unit_id     int                     default 7,
    foreign key (category_id) references category (id),
    foreign key (brand_id) references brand (id),
    foreign key (unit_id) references unit (id)
);

create table customer
(
    id            int          not null auto_increment primary key,
    name          varchar(100) not null,
    address_id    int,
    email         varchar(100) not null,
    phone         varchar(15),
    password      varchar(500),
    loyalcustomer boolean default 0,
    adminstatus   boolean default 0,
    foreign key (address_id) references address (id)
);

create table orders
(
    id             int not null auto_increment primary key,
    orderDate      timestamp    default current_timestamp,
    orderstatus_id int not null default 1,
    customer_id    int not null,
    foreign key (orderstatus_id) references orderstatus (id),
    foreign key (customer_id) references customer (id)
);

create table order_contains
(
    id            int not null auto_increment primary key,
    order_id      int not null,
    product_id    int not null,
    productamount int default 1,
    foreign key (order_id) references orders (id),
    foreign key (product_id) references product (id)
);

create table image
(
    id         int not null auto_increment primary key,
    image      varchar(150),
    product_id int not null,
    foreign key (product_id) references product(id)
);

create table store
(
    id         int not null auto_increment primary key,
    phone      varchar(15),
    email      varchar(100),
    openhours  varchar(200),
    address_id int not null,
    foreign key (address_id) references address(id)
);

create table content
(
    id int not null auto_increment primary key,
    requirement varchar(1000)
)