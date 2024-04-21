import {Column,Entity,OneToMany} from "typeorm";
import {Class} from './Class'


@Entity("Teacher" ,{schema:"public" } )
export  class Teacher {

@Column("uuid",{ primary:true,name:"id",default: () => "uuid_generate_v4()", })
id:string;

@Column("timestamp with time zone",{ name:"created_at",default: () => "now()", })
createdAt:Date;

@Column("timestamp without time zone",{ name:"dob",nullable:true })
dob:Date | null;

@Column("character varying",{ name:"name",nullable:true })
name:string | null;

@Column("character varying",{ name:"email",nullable:true })
email:string | null;

@Column("character varying",{ name:"phone",nullable:true })
phone:string | null;

@Column("character varying",{ name:"hometown",nullable:true })
hometown:string | null;

@Column("text",{ name:"password",nullable:true })
password:string | null;

@OneToMany(()=>Class,class=>class.teacher)


classes:Class[];

}
