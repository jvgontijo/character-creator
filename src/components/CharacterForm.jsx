import { Component } from 'react';

class CharacterForm extends Component {
  state = {
    name: '',
    classType: '',
    level: ''
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", this.state);
  };

  render() {
    const { name, classType, level } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Create/Edit Character</h2>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={this.handleChange} />
        </label>
        <label>
          Class:
          <input type="text" name="classType" value={classType} onChange={this.handleChange} />
        </label>
        <label>
          Level:
          <input type="number" name="level" value={level} onChange={this.handleChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default CharacterForm;
