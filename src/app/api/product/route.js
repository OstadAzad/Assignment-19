import { PrismaClient, } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function POST (req, res){
      BigInt.prototype.toJSON = function (){
        return this.toString();
      };

//==============================================for product============================================================

//===============================create-insert one==========================================

try{
  const prisma = new PrismaClient();

  const result = await prisma.product.create({
    data:
      {
        firstName:"a k",
        metaTitle:"book",
        slug:"good",
        summary:"science book",
        price: 100,
        discount: 10,
        userId:1,
        categoryId:1
    },
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

  const result = await prisma.product.createMany({
  data: [
{firstName:"azad",metaTitle:"book",slug:"good",summary:"science book",price: 100,discount: 10,userId:1,categoryId:1},
{firstName:"tasnim",metaTitle:"book",slug:"good",summary:"biology",price: 200,discount: 20,userId:2,categoryId:2},
{firstName:"azad",metaTitle:"book",slug:"good",summary:"chemisty book",price: 300,discount: 30,userId:3,categoryId:3},
{firstName:"manha",metaTitle:"book",slug:"good",summary:"physics book",price: 400,discount: 40,userId:4,categoryId:4}
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

  const result = await prisma.product.findMany();

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

  const result = await prisma.product.update({
    where:{id:2},
    data:{firstName:"marjan",metaTitle:"ship"}
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

  const result = await prisma.product.delete({
    where:{id:9}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/

}