import { PrismaClient, } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function POST (req, res){
      BigInt.prototype.toJSON = function (){
        return this.toString();
      };

//==============================================for user============================================================

//===============================create-insert one==========================================

try{
  const prisma = new PrismaClient();

  const result = await prisma.user.create({
    data:
      {
        firstName:"a",
        middleName:"k",
        lastName:"azad",
        mobile:"0181486846",
        email:"azads5392@gmail.com",
        password:"abc123",
        admin: 1,
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

  const result = await prisma.user.createMany({
    data:[
         {firstName:"a", middleName:"khan", lastName:"azad", mobile:"01814864", email:"rahima@gmail.com", password:"abc123", admin:1},
         {firstName:"b", middleName:"khan", lastName:"azad", mobile:"01814865", email:"karima@gmail.com", password:"abc123", admin:1},
         {firstName:"c", middleName:"khan", lastName:"azad", mobile:"01814866", email:"jamalla@gmail.com", password:"abc123", admin:1},
         {firstName:"d", middleName:"khan", lastName:"azad", mobile:"01814867", email:"kama@gmail.com", password:"abc123", admin:1},
         {firstName:"e", middleName:"khan", lastName:"azad", mobile:"01814868", email:"jashima@gmail.com", password:"abc123", admin:1}         
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

  const result = await prisma.user.findMany();

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

  const result = await prisma.user.update({
    where:{id:2},
    data:{firstName:"maimuna",lastName:"marjan"}
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

  const result = await prisma.user.delete({
    where:{id:19}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


}