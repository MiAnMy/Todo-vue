import { getData, setData } from "../../modules/storage";

export default context => {
  const storeName = context.store.$id;
  const localData = getData(storeName);
  if (localData) context.store.$patch(localData);
  context.store.$subscribe((mutation, state) => {
    setData(storeName, state);
  });
};
