const Mutation = {
  async createItem(parent, args, ctx, info) {
    // TODO: check if they are logged in
    console.log(ctx.db);
    const item = await ctx.db.mutation.createItem(
      // returns a promise but no value stored into item unless you put async
      {
        data: {
          ...args,
        },
      },
      info // ensures item is returned to us from database once we we've created it. info has query.
    );
    return item;
    //database in put into context
  },
  //   createDog(parent, args, ctx, info) {
  //     global.dogs = global.dogs || [];
  //     //create a dog
  //     const newDog = { name: args.name };
  //     global.dogs.push(newDog);
  //     return newDog;
  //   },
};

module.exports = Mutation;
