describe('Address Book', function() {
    it('should be able to add a contact', function() {
        var addressBook = new AddressBook();
        thisContact = new Contact();
        addressBook.addContact(thisContact);
        expect(addressBook.getContact(0)).toBe(thisContact);
    })
})

function AddressBook() {
    this.contacts = [];
    this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb) {
    var self = this;
    setTimeout(function() {    //the point of this function is to pretend to be asynchronous - fake api call
        self.initialComplete = true; //this is what our fake api call will do when it's complete
        if (cb) {
            return cb();
        }
    }, 3);
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact)
}

AddressBook.prototype.getContact = function(index) {
    return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index) {
    this.contacts.splice(index, 1);
}

var addressBook = {
    name: name,
    phone: phone,
    address: address
}