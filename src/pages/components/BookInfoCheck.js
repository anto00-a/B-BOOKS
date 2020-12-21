import React from "react";


export const createDescMarkup = (description) => {
    if (description === undefined) {return  "Trama non disponibile"};
    return description ;
};

export const checkAuthors = (authors) => {
    if (authors === undefined) {return  "Autore non disponibile"};
    return authors ;
};

export const checkCategories = (category) => {
    if (category === undefined) {return  "Nessuna categoria"};
    return category ;
};

export const checkLanguage = (language) => {
    if (language === undefined) {return  "Lingua non disponibile"};
    return language ;
};

export const checkPublisher = (publisher) => {
    if (publisher === undefined) {return  "Casa editrice non disponibile"};
    return publisher ;
};
export const checkPublishedDate = (date) => {
    if (date === undefined) {return  "Data di pubblicazione non disponibile"};
    return date ;
};

export const checkPrice = (saleInfo) => {
    if (saleInfo.saleability === "FOR_SALE") {
            return saleInfo.listPrice.amount + ' ' + saleInfo.listPrice.currencyCode;
        
    } else if (saleInfo.saleability === "NOT_FOR_SALE") {
        return "Non in vendita"
    } else if (saleInfo.saleability === "FREE") {
        return "Gratis"
    }
}
