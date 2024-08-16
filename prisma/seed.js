const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const syncAndSeed = async() => {
  try {
    await prisma.owner.create({
      data: {
        name: 'Bill'
      }
    });

    await prisma.pet.create({
      data: {
        name: 'Floofy',
        type: 'Bunny'
      }
    })

    await prisma.owner.create({
      data: {
        name: 'Sally',
        pets: {
          create: {
            name: 'Segway',
            type: 'Sea Snail',
            products: {
              create: [
                {
                  product: {
                    create: {
                      name: 'Small Brush'
                    }
                  }
                }
              ]
            }
          }
        }
      }
    })

    console.log(await prisma.pet.findMany());
    console.log(await prisma.pet.findFirst());

    await prisma.$disconnect();
  } catch(err) {
    console.log(err);
  }
}

syncAndSeed()