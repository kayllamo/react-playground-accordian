import React, { Component } from 'react';
import './Accordian.css'   

export default class Accordian extends React.Component {
    static defaultProps = {
        sections: []
      };
      state = {
        activeSectionIndex: null,
      };

      handleButtonClick(sectionIndex) {
        this.setState({ activeSectionIndex: sectionIndex })

      }

      renderItem(section, index, activeSectionIndex) {
        return (
            <ul>
                <li className='Accordian_item' key={index}>
                    <button
                    onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                    </button>
                    {(activeSectionIndex === index) && <p>{section.content}</p>} 
                </li>
            </ul>
        )
      }

      render() {
        const { activeSectionIndex } = this.state
        const { sections } = this.props

        return (
          <ul className='Accordian'>
              {sections.map((section,index) => 
                    this.renderItem(section, index, activeSectionIndex)
                )}
          </ul>
        )
    }
}