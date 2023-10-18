import { PrismaClient, } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function POST (req, res){
      BigInt.prototype.toJSON = function (){
        return this.toString();
      };


//===========================================Transaction & rollback==================================================

try{
  const prisma = new PrismaClient();

  const createuser = prisma.user.create({
    data:{
      firstName:"a",
      middleName:"k",
      lastName:"azad",
      mobile:"01709637568",
      email:"ilmfsom@gmaila.com",
      password:"abc123",
      admin: 1,
        }
  });

  const deletecategory = prisma.category.delete({
    where:{id:11}
  });

const result = await prisma.$transaction([createuser,deletecategory])

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed", data:error})
  }





//=====================================================groupby=======================================================
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.user.groupBy({
    by:['middleName']
  });

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed", data:error})
  }
*/







//===============================================Aggregation==========================================================
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.product.aggregate({
    _count:{id:true},
    _avg:{price:true},
    _max:{price:true},
    _sum:{price:true}
  });

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed", data:error})
  }
*/




//===========================================Transaction & rollback==================================================
/*
try{
  const prisma = new PrismaClient();

  const createuser = prisma.user.create({
    data:{
      firstName:"a",
      middleName:"k",
      lastName:"azad",
      mobile:"01709637569",
      email:"ilmfsom@gmail.com",
      password:"abc123",
      admin: 1,
        }
  });

  const deletecategory = prisma.category.delete({
    where:{id:6}
  });

const result = await prisma.$transaction([createuser,deletecategory])



    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed", data:error})
  }
*/





}