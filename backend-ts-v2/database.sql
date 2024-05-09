create database Student_management;

use Student_management;
create table Hocsinh(
	mahocsinh int primary key,
    hoten varchar(225),
    gioitinh bool,
    ngaysinh datetime,
    diachi varchar(225),
    email varchar(225)
);

create table Khoilop(
	makhoilop int primary key,
    tenkhoilop varchar(225)
);
create table Hocki(
	mahocki int primary key,
    tenhocki varchar(225)
);

create table Monhoc(
	mamonhoc int primary key,
    tenmonhoc varchar(225),
    heso int
);

create table Namhoc(
	manamhoc int primary key,
    nam1 varchar(225),
    nam2 varchar(225)
);

create table Thamso(
	tuoitoithieu int,
    tuoitoida int,
    sisotoida int,
    diemdat int,
    diemdatmon int,
    diemtoithieu int,
    diemtoida int
);

create table loaihinhkiemtra(
	malhkt int primary key,
    tenlhkt varchar(225),
    heso int
);

create table Lop(
	malop int primary key,
    tenlop varchar(225),
    siso int,
    makhoilop int,
    FOREIGN KEY (makhoilop) REFERENCES khoilop(makhoilop) 
    );
    
create table chitietdslop(
	machitietdslop int primary key,
    malop int,
    mahocsinh int,
    mahocki int,
    diemtbhk float,
    FOREIGN KEY (malop) REFERENCES lop(malop),
    FOREIGN KEY (mahocsinh) REFERENCES hocsinh(mahocsinh),
    FOREIGN KEY (mahocki) REFERENCES hocki(mahocki)
);

create table bangdiemmon(
	mabangdiemmon int primary key,
    malop int,
    mamonhoc int,
    mahocki int,
    FOREIGN KEY (mahocki) REFERENCES hocki(mahocki),
    FOREIGN KEY (malop) REFERENCES lop(malop),
    foreign key (mamonhoc) references monhoc(mamonhoc)
);

create table chitietbangdiemmon(
	mabangdiemmon int,
    mahocsinh int,
    diemtbmon float,
    PRIMARY KEY (mabangdiemmon, mahocsinh),
    FOREIGN KEY (mahocsinh) REFERENCES hocsinh(mahocsinh),
    FOREIGN KEY (mabangdiemmon) REFERENCES bangdiemmon(mabangdiemmon)
);

create table chitietdiemloaihinhkiemtra(
	mabangdiemmon int,
    mahocsinh int,
    malhkt int,
    diem float,
    primary key (mabangdiemmon, mahocsinh, malhkt),
    FOREIGN KEY (mahocsinh) REFERENCES hocsinh(mahocsinh),
    FOREIGN KEY (mabangdiemmon) REFERENCES bangdiemmon(mabangdiemmon),
    foreign key (malhkt) references loaihinhkiemtra(malhkt)
);

create table baocaotongketmon(
	mabctkm int,
    mahocki int,
    manamhoc int,
    mamonhoc int,
    primary key(mabctkm),
    FOREIGN KEY (mahocki) REFERENCES hocki(mahocki),
    foreign key (mamonhoc) references monhoc(mamonhoc),
    foreign key (manamhoc) references namhoc(manamhoc)
);

create table chitiettongketmon(
	mabctkm int primary key,
    malop int,
    soluongdat int,
    tiledat float,
    FOREIGN KEY (malop) REFERENCES lop(malop)
);

create table baocaotongkethocki(
	mahocki int,
    manamhoc int,
    malop int,
    soluongdat int,
    tiledat float,
    primary key(mahocki,malop,manamhoc),
    FOREIGN KEY (mahocki) REFERENCES hocki(mahocki),
    foreign key (manamhoc) references namhoc(manamhoc),
    foreign key (malop) references lop(malop)
);

ALTER TABLE monhoc
ADD COLUMN tenmonhoc VARCHAR(255) NOT NULL;