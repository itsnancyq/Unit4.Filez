import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  for(let i=1; i <= 3; i++){
    const folders = await createFolder( 'Folder ' + i )
    for (let j=1; j <= 5; j++){
      const files = await createFiles( 'File ' + j, 17 * j, folders.id )
    }
  }
}
