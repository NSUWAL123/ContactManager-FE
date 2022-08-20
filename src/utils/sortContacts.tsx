import { contactType } from "../interface/contactType"

export const sortContact = (arr: Array<contactType>) => {
    let favouriteC: any = [];
    let nonFavouriteC: any = [];

    arr.filter((contact: contactType) => {
        if (contact.is_favourite === true) {
            favouriteC.push(contact);
        } else {
            nonFavouriteC.push(contact);
        }
    })

    favouriteC = favouriteC.sort((objA: contactType, objB: contactType) => {
        var nameA = objA.name.toLowerCase(),
          nameB = objB.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    
      nonFavouriteC = nonFavouriteC.sort(
        (objA: contactType, objB: contactType) => {
          var nameA = objA.name.toLowerCase(),
            nameB = objB.name.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        }
      );

    const sortedArr = [...favouriteC, ...nonFavouriteC];

    return sortedArr;
}