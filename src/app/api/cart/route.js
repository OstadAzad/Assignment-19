import { PrismaClient, } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function POST (req, res){
      BigInt.prototype.toJSON = function (){
        return this.toString();
      };

//==============================================for cart============================================================

//===============================create-insert one==========================================

try{
  const prisma = new PrismaClient();

  const result = await prisma.cart.create({
    data:
      {
        title:"book",
        sessionId:"1",
        token:"pic",
        status:"good",
        firstName:"maimuna",
        middleName:"azad",
        lastName: "marjan",
        mobile:"948483773",
        email:"ctg@gmail.com",
        city:"ctg",
        country:"Bangladesh",
        userId:1
    }
  });

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed", data:error})
  }




//===============================create-insert many==========================================
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.cart.createMany({
    data:[
{title:"book",sessionId:"1",token:"pic",status:"good",firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",sessionId:"1",token:"pic",status:"good",firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",sessionId:"1",token:"pic",status:"good",firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",sessionId:"1",token:"pic",status:"good",firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",sessionId:"1",token:"pic",status:"good",firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",sessionId:"1",token:"pic",status:"good",firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",sessionId:"1",token:"pic",status:"good",firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",sessionId:"1",token:"pic",status:"good",firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",sessionId:"1",token:"pic",status:"good",firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",sessionId:"1",token:"pic",status:"good",firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
]
  });

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed", data:error})
  }
*/




//===============================Read-find many==========================================
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.cart.findMany();

return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/




//===============================update==========================================
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.cart.update({
    where:{id:3},
    data:{title:"book",sessionId:"1",token:"pic",status:"good",firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/




//===============================delete==========================================
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.cart.delete({
    where:{id:13}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/

}