import React, {useState} from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.components';
const Directory = () => {
    const cards = [
        {
            title:"HATS",
            imageUrl: "https://toppng.com/uploads/preview/mens-formal-hats-top-hat-transparent-11563644660yjhitvmas7.png",
            id:5,
            linkUrl: 'hats'
        },
        {
            title:"CATS",
            imageUrl: "https://toppng.com/uploads/preview/mens-formal-hats-top-hat-transparent-11563644660yjhitvmas7.png",
            id:5,
            linkUrl: ''
        },
        {
            title:"MATS",
            imageUrl: "https://toppng.com/uploads/preview/mens-formal-hats-top-hat-transparent-11563644660yjhitvmas7.png",
            id:5,
            linkUrl: ''
        },
        {
            title:"HATS",
            imageUrl: "https://toppng.com/uploads/preview/mens-formal-hats-top-hat-transparent-11563644660yjhitvmas7.png",
            size: "large",
            id:5,
            linkUrl: ''
        },
        {
            title:"FATS",
            imageUrl: "https://toppng.com/uploads/preview/mens-formal-hats-top-hat-transparent-11563644660yjhitvmas7.png",
            size: "large",
            id:5,
            linkUrl: ''
        }
    ]
    const [sections, setSections] = useState(cards);
    return (
        <div className='directory-menu'>
            {
                sections.map( ({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>
    )
}

export default Directory;
