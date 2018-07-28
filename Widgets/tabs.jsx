import React from 'react';

class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  render() {
    return (
      <div>
        <header>
          <ul>
            <h1>Title1</h1>
            <h1>Title2</h1>
            <h1>Title3</h1>
          </ul>
        </header>
        <article>Content</article>
      </div>
    );
  }

}



export default Tabs;
