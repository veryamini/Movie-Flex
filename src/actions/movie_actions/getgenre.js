import { GET_GENRE, ITEMS_LOADING } from "../types";
import { url } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";
import { itemsLoading } from "../../actions/itemsLoading";

export const getgenre = () => dispatch => {
  dispatch(itemsLoading({ type: ITEMS_LOADING }, true));
  axios
    .get(`${url}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(res =>
      dispatch({
        type: GET_GENRE,
        payload: res.data.genres
      })
    ).then(res => dispatch(itemsLoading({ type: ITEMS_LOADING }, false)))
};
