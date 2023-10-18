import { PrismaClient, } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function POST (req, res){
      BigInt.prototype.toJSON = function (){
        return this.toString();
      };


//==============================================for category============================================================

//===============================create-insert one==========================================

try{
  const prisma = new PrismaClient();

  const result = await prisma.category.create({
    data:
      {
        title:"book",
        metaTitle:"english",
        slug:"good",
        content:"history"
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

  const result = await prisma.category.createMany({
    data:[
      {title:"book", metaTitle:"english", slug:"good", content:"literature"},
      {title:"book", metaTitle:"math", slug:"good", content:"algebra"},
      {title:"book", metaTitle:"biology", slug:"good", content:"humosepience"},
      {title:"book", metaTitle:"chemistry", slug:"good", content:"reactivity"},
      {title:"book", metaTitle:"islam", slug:"good", content:"history"}
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

  const result = await prisma.category.findMany();

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

  const result = await prisma.category.update({
    where:{id:1},
    data:{title:"book",metaTitle:"sociology"}
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

  const result = await prisma.category.delete({
    where:{id:12}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/

}