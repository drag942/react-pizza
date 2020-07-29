import React from 'react';

const Categories =  React.memo(({activeCategory, items, onClick}) => {


    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={()=>{onClick(null)}}>Все</li>
                {items
                    && items.map((item, index) =>
                        <li
                            className={activeCategory === index ? 'active' : ''}
                            onClick={()=>{onClick(index)}}
                            key={`${item}_${index}`}>
                            {item}
                        </li>
                )}
            </ul>
        </div>
    );
});


/*import React, {Component} from 'react';

class Categories extends Component {
    state = {
        activeItem: 3,
    };

    onSelectItem = index => {
        this.setState({
            activeItem: index
        })
    };

    render() {
        const {items, onClick} = this.props;

        return (
            <div className="categories">
                <ul>
                    <li>Все</li>
                    {items.map((item, index) =>
                        <li
                            className={this.state.activeItem === index ? 'active' : ''}
                            onClick={()=>{this.onSelectItem(index)}}
                            key={`${item}_${index}`}>{item}
                        </li>
                    )
                    }
                </ul>
            </div>
        );
    }
}*/



export default Categories;
