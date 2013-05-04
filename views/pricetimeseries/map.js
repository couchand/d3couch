function(doc) {
    if( doc.date && doc.price ) {
        emit( doc.date, doc.price );
    }  
}
