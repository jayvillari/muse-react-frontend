import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';
class CreateSongForm extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      album: '',
      artist: ''
    }
  }
  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    return (
      <Segment>
        <h4>Add Song</h4>
        <Form onSubmit={(e) => this.props.addSong(e, this.state)}>
          <Label>Song:</Label>
          <Form.Input type='text' name='title' value={this.state.song} onChange={this.handleChange}/>
          <Label>Album:</Label>
          <Form.Input type='text' name='album' value={this.state.album} onChange={this.handleChange}/>
          <Label>Artist:</Label>
          <Form.Input type='text' name='artist' value={this.state.artist} onChange={this.handleChange}/>
          <Button type='Submit'>Add Song</Button>
        </Form>
      </Segment>
      )
  }
}
export default CreateSongForm;