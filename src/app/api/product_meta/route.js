import { PrismaClient, } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function POST (req, res){
      BigInt.prototype.toJSON = function (){
        return this.toString();
      };


//==============================================for product-meta============================================================

//===============================create-insert one==========================================

try{
  const prisma = new PrismaClient();

  const result = await prisma.product_meta.create({
    data:
      {
        key:"ostad",
        content:"good learning site",
        userId:1,
        productId:1
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

  const result = await prisma.product_meta.createMany({
    data:[
         {key:"book", content:"bangla", userId:1, productId:1},
         {key:"book", content:"eng", userId:1, productId:1},
         {key:"book", content:"math", userId:1, productId:1},
         {key:"book", content:"bio", userId:2, productId:2},
         {key:"book", content:"che", userId:2, productId:2},
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

  const result = await prisma.product_meta.findMany();

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

  const result = await prisma.product_meta.update({
    where:{id:3},
    data:{key:"mobile",content:"samsung",}
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

  const result = await prisma.product_meta.delete({
    where:{id:25}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/



}