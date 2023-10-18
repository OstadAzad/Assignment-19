import { PrismaClient, } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function POST (req, res){
      BigInt.prototype.toJSON = function (){
        return this.toString();
      };

//==============================================for product_review============================================================

//===============================create-insert one==========================================

try{
  const prisma = new PrismaClient();

  const result = await prisma.product_review.create({
    data:
      {
        title:"ostad",
        rating:"good",
        content:"developing",
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

  const result = await prisma.product_review.createMany({
    data:[
      {title:"ostad",rating:"good",content:"developing",userId:1,productId:1},  
      {title:"ostad",rating:"good",content:"developing",userId:2,productId:2},
      {title:"ostad",rating:"good",content:"developing",userId:1,productId:1},   
      {title:"ostad",rating:"good",content:"developing",userId:1,productId:1},   
      {title:"ostad",rating:"good",content:"developing",userId:1,productId:1},
      {title:"ostad",rating:"good",content:"developing",userId:1,productId:1},   
      {title:"ostad",rating:"good",content:"developing",userId:1,productId:1},   
      {title:"ostad",rating:"good",content:"developing",userId:1,productId:1},   
      {title:"ostad",rating:"good",content:"developing",userId:1,productId:1},
      {title:"ostad",rating:"good",content:"developing",userId:1,productId:1},   
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

  const result = await prisma.product_review.findMany();

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

  const result = await prisma.product_review.update({
    where:{id:2},
    data:{title:"ostad",rating:"very good", content:"web"}
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

  const result = await prisma.product_review.delete({
    where:{id:11}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/

}