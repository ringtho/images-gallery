import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Jumbotron>
      <h1>Images Gallery</h1>
      <p>
        This is a simple application that diplays pictures from unsplash api.
        You can type a search term in the input field to start using the
        application.
      </p>
      <p>
        <Button variant="dark" href="https://unplash.com" target="_blank">
          Learn More
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
