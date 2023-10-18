import { PrismaClient, } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function POST (req, res){
      BigInt.prototype.toJSON = function (){
        return this.toString();
      };

//==============================================for order============================================================

//===============================create-insert one==========================================

try{
  const prisma = new PrismaClient();

  const result = await prisma.order.create({
    data:
      {
        title:"book",
        token:"pic",
        subTotal:100,
        itemDiscount:10,
        tax:3,
        total:150,
        discount:15,
        grandTotal:200,
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

  const result = await prisma.order.createMany({
    data:[
{title:"book",token:"pic",subTotal:100,itemDiscount:10,tax:3,total:150,discount:15,grandTotal:200,firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",token:"pic",subTotal:100,itemDiscount:10,tax:3,total:150,discount:15,grandTotal:200,firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",token:"pic",subTotal:100,itemDiscount:10,tax:3,total:150,discount:15,grandTotal:200,firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",token:"pic",subTotal:100,itemDiscount:10,tax:3,total:150,discount:15,grandTotal:200,firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",token:"pic",subTotal:100,itemDiscount:10,tax:3,total:150,discount:15,grandTotal:200,firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",token:"pic",subTotal:100,itemDiscount:10,tax:3,total:150,discount:15,grandTotal:200,firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",token:"pic",subTotal:100,itemDiscount:10,tax:3,total:150,discount:15,grandTotal:200,firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",token:"pic",subTotal:100,itemDiscount:10,tax:3,total:150,discount:15,grandTotal:200,firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",token:"pic",subTotal:100,itemDiscount:10,tax:3,total:150,discount:15,grandTotal:200,firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},
{title:"book",token:"pic",subTotal:100,itemDiscount:10,tax:3,total:150,discount:15,grandTotal:200,firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},  
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

  const result = await prisma.order.findMany();

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

  const result = await prisma.order.update({
    where:{id:2},
    data:{title:"book",token:"pic",subTotal:100,itemDiscount:10,tax:3,total:150,discount:15,grandTotal:200,firstName:"maimuna",middleName:"azad",lastName: "marjan",mobile:"948483773",email:"ctg@gmail.com",city:"ctg",country:"Bangladesh",userId:1},  

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

  const result = await prisma.order.delete({
    where:{id:5}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


}