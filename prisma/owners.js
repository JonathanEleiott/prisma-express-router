const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getOwners = async() => {
  try {
    return prisma.owner.findMany();
  } catch(err) {

  }
}

module.exports = {
  getOwners
}