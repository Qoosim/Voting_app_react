import React, { Component } from 'react'

class Product extends Component {
    render() {
        return (
            <div className='item'>
                <div className='image'>
                    <img 
                        src={this.props.productImageUrl} 
                        alt='Plenty-1' 
                    />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a>
                            <i className='middle caret up icon'/>
                        </a>
                        {this.props.votes}
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img 
                            className='ui avatar image'
                            src={this.props.submitterAvatarUrl} 
                            alt='Alaje Avatar' 
                        />
                    </div>

                </div>

            </div>
        )
    }
}

export default Product
