import React, { Component } from 'react';

class SliderItems extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {
          this.props.itemLinks.map((itemLink, i) => {
            return (
              <div key={i} className="item">
                <img src={itemLink} alt="martina-artwork" draggable="false"/>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default SliderItems;
