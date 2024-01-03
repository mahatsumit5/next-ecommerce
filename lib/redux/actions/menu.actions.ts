import { AppDispatch } from "@/store";
import { setMenu } from "../menu.slice";

export const getCatgoryAction =
  (id: string) => async (dispatch: AppDispatch) => {
    const result = await fetch(`/api/category/${id}`, {
      method: "GET",
    });
    const { category } = await result.json();
    dispatch(setMenu({ parentCat: id, category: category }));
  };
