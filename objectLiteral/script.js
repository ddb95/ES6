function address(state, city) {
    const newAddressBook = {
        state,
        city
    };
    console.log(newAddressBook);
}

address('Assam', 'Silchar')

// Old Style
function practiceAddress(address) {
    const newAddress = {
        city : address.city,
        state: address.state,
        country: 'India'
    }
}

practiceAddress({city:'Silchar', state:'Assam'})

// new Style
function practiceNewAddress(address) {
    const {city, state} = address;
    const newAddress = {
        city,
        state,
        country: 'India'
    };
    console.log('New Methods');
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

practiceNewAddress({city:'Silchar', state:'Assam'})
