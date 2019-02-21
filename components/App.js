var contacts = [{
        id: 1,
        firstName: 'John',
        lastName: 'White',
        email: 'john.white@example.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Black',
        email: 'adam.black@example.com',
    },
    {
        id: 3,
        firstName: 'Willy',
        lastName: 'Green',
        email: 'willy.green@example.com',
    }
];

var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

var App = React.createClass({
    render: function () {
        return (
            React.createElement('div', {
                    className: 'app'
                },
                React.createElement(ContactForm, {
                    contact: contactForm
                }),
                React.createElement(Contacts, {
                    items: contacts
                }, {})
            )
        );
    }
});