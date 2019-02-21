describe('Address Book', function() {
    var addressBook,
    thisContact;

    beforeEach(function() {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it('should be able to add a contact', function() {
        addressBook.addContact(thisContact);
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', function() {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);
    });
});

describe('Async Address Book', function() {  //initially fails because the test is running before the asynchronous function is finished
    var addressBook = new AddressBook();    //with its task. so we move addressBook up to the suite scope, and do beforeEach.
    beforeEach(function(done) {             //this signals to the framework that it's done doing its thing and it can continue testing
        addressBook.getInitialContacts(function() {
            done();                             //this signals to framework that this test relys upon the asynchronous function
        });
    });
    it('should grab initial contacts', function(done) {
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});
