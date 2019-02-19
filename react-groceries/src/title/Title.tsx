import React, { Component } from 'react';
import './Title.css';
import github from './GitHub-Mark-Light-32px.png';

interface Props {
  text: string;
}

class Title extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="Title">
        <span className="text">{this.props.text}</span>
        <a
          className="github"
          aria-label="GitHub"
          href="https://github.com/dstanich/angular-elements-presentation"
          target="_blank"
        >
          <img src={github} />
        </a>
      </div>
    );
  }
}

export { Title };
