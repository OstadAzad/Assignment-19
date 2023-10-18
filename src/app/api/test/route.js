import { PrismaClient, } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function POST (req, res){
      BigInt.prototype.toJSON = function (){
        return this.toString();
      };

//==============================================for user============================================================

//===============================create-insert one==========================================
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.user.create({
    data:
      {
        firstName:"a",
        middleName:"k",
        lastName:"azad",
        mobile:"0181486844",
        email:"azads5390@gmail.com",
        password:"abc123",
        admin: 1,
    }
  });

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed", data:error})
  }
*/



//===============================create-insert many==========================================
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.user.createMany({
    data:[
         {firstName:"a", middleName:"khan", lastName:"azad", mobile:"0181486888", email:"rahim@gmail.com", password:"abc123", admin:1},
         {firstName:"b", middleName:"khan", lastName:"azad", mobile:"0181486861", email:"karim@gmail.com", password:"abc123", admin:1},
         {firstName:"c", middleName:"khan", lastName:"azad", mobile:"0181486862", email:"jamal@gmail.com", password:"abc123", admin:1},
         {firstName:"d", middleName:"khan", lastName:"azad", mobile:"0181486863", email:"kamal@gmail.com", password:"abc123", admin:1},
         {firstName:"e", middleName:"khan", lastName:"azad", mobile:"0181486864", email:"jashim@gmail.com", password:"abc123", admin:1}         
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
    data:{firstName:"marjan",lastName:"azad"}
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
    where:{id:6}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/




//==============================================for category============================================================

//===============================create-insert one==========================================
/*
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
*/


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
    where:{id:5}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/



//==============================================for product============================================================

//===============================create-insert one==========================================
/*
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
        user:{
          connect:{
            id:3,
          },
        },
        category:{
          connect:{
              id:3,
          },
        },
    },
  });

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed", data:error})
  }
*/



//===============================create-insert one==========================================
/*
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
        user:{
          connect:{
            id:3,
          },
        },
        category:{
          connect:{
              id:3,
          },
        },
    },
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
    where:{id:3}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
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



//==============================================for product-meta============================================================

//===============================create-insert one==========================================
/*
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
*/



//===============================create-insert many==========================================

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
    where:{id:2},
    data:{firstName:"marjan",lastName:"azad"}
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
    where:{id:6}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/



//================================================paggination====================================================
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.user.findMany({
    
    cursor:{id:2},
    take:3
  });

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed", data:error})
  }
*/


//==========================================logging & time calculation=============================================
/*
try{
  const prisma = new PrismaClient({log:['query', 'info', 'warn', 'error']});

  const startTime=Date.now();
  const result = await prisma.user.findMany({
    
    cursor:{id:2},
    take:3
  });
  const exeTime=(Date.now()-startTime)+"milliseconds";

    return NextResponse.json({output:exeTime, status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed", data:error})
  }
*/




}