import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadRestaurants = async () => {

    // if ( !uid ) throw new Error ('El UID del usuario no existe');

    const collectionRef = collection (FirebaseDB, `id-user/foodApp/restaurants`);
    const docs = await getDocs (collectionRef);

    const restaurants = [];
    docs.forEach ( doc => {
        restaurants.push({ id: doc.id, ...doc.data()})
    });
    
    return restaurants;
}

export const loadPlates = async (id = '') => {

    // if ( !uid ) throw new Error ('El UID del usuario no existe');

    const collectionRef = collection (FirebaseDB, `id-user/foodApp/restaurants/aromat-bakery/menu`);
    const docs = await getDocs (collectionRef);

    const plates = [];
    docs.forEach ( doc => {
        plates.push({ id: doc.id, ...doc.data()})
    });
    
    return plates;
}