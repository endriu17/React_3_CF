var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('div', {
                    className: 'contactItem'
                },
                React.createElement('img', {
                    className: 'contactImage',
                    src: 'http://icons.veryicon.com/png/Application/iOS8%20Cirtangle%20Concept/Contacts.png'
                }),
                React.createElement('h3', {
                    className: 'contactLabelHeader'
                }, 'Imię: '),
                React.createElement('p', {
                    className: 'contactLabel'
                }, this.props.item.firstName),
                React.createElement('h3', {
                    className: 'contactLabelHeader'
                }, 'Nazwisko: '),
                React.createElement('p', {
                    className: 'contactLabel'
                }, this.props.item.lastName),
                React.createElement('a', {
                        className: 'contactEmail',
                        href: 'mailto:' + this.props.item.email
                    },
                    this.props.item.email
                )
            )
        )
    },
});