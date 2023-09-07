import { collection, doc, setDoc } from "firebase/firestore/lite";
import { loadPlates, loadRestaurants } from "../../helpers/loadRestaurants";
import { setPlates, setRestaurant } from "./foodAppSlice";

export const startLoadingRestaurants = () => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error ('El UID del usuario no existe');

        const restaurants = await loadRestaurants ();
        dispatch ( setRestaurant(restaurants));

        
    }

    ;
}

export const startLoadingPlates= () => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error ('El UID del usuario no existe');

        const plates = await loadPlates ();
        dispatch ( setPlates(plates));

        
    }

    ;
}

