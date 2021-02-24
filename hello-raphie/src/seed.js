'use strict'

const db = require('../server/db')
const {Doggy, Behavior} = require('../server/db/models')

async function createDoggy() {
    const doggy1 = {
      name: 'Arya',
      birthday: new Date('2014-10-24'),
      breed:'Shiba Enu Husky Mix',
    }
    const doggy2 = {
      name: 'Paloma',
      birthday: new Date('2018-07-29'),
      breed:'Golden Retriever',
    }
    const doggy3 = {
        name: 'Doogy',
        birthday: new Date('2010-01-22'),
        breed:'Corgi',
    }
    await Doggy.create(doggy1)
    await Doggy.create(doggy2)
    await Doggy.create(doggy3)
  
    console.log(`seeded events`)
  }
    
  async function seed() {
    await db.sync({force: false})
    console.log('db synced!')
  
    await createDoggy()
    
    console.log(`seeded successfully`)
  }

  async function runSeed() {
    console.log('seeding...')
    try {
      await seed()
    } catch (err) {
      console.error(err)
      process.exitCode = 1
    } finally {
      console.log('closing db connection')
      await db.close()
      console.log('db connection closed')
    }
  }

  if (module === require.main) {
    runSeed()
  }
  
  module.exports = seed

