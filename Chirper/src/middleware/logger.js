const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action: ", action);
<<<<<<< HEAD
  const returnedValue = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return returnedValue;
=======
  const returnValue = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return returnValue;
>>>>>>> f9152942841ee934641ee40080684cea9e04d296
};

export default logger;
