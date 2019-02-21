var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired,
  },

  render: function () {
    return (
      React.createElement('form', {
          className: 'contactForm'
        },
        React.createElement('h2', {
          className: 'formHeader',
        }, 'Enter contact details'),
        React.createElement('input', {
          type: 'text',
          placeholder: 'First name',
          value: this.props.contact.firstName,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Last name',
          value: this.props.contact.lastName,
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
        }),
        React.createElement('button', {
          type: 'submit'
        }, "Add contact")
      )
    )
  },
})