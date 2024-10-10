import React from 'react';

export default function Ratings() {
    return (
        <div className="rating">
            <input
                defaultValue="5"
                id="star5"
                name="rate"
                type="radio"
            />
            <label
                htmlFor="star5"
                title="text"
            />
            <input
                defaultValue="4"
                id="star4"
                name="rate"
                type="radio"
            />
            <label
                htmlFor="star4"
                title="text"
            />
            <input
                defaultChecked
                defaultValue="3"
                id="star3"
                name="rate"
                type="radio"
            />
            <label
                htmlFor="star3"
                title="text"
            />
            <input
                defaultValue="2"
                id="star2"
                name="rate"
                type="radio"
            />
            <label
                htmlFor="star2"
                title="text"
            />
            <input
            checked
                defaultValue="1"
                id="star1"
                name="rate"
                type="radio"
            />
            <label
                htmlFor="star1"
                title="text"
            />
        </div>
        // <div className="radio">
        //     <input
        //         defaultValue="5"
        //         id="rating-5"
        //         name="rating"
        //         type="radio"
        //         checked
        //     />
        //     <label htmlFor="rating-5" title="5 stars">
        //         <svg height="1em" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        //             <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        //         </svg>
        //     </label>

        //     <input
        //         defaultValue="4"
        //         id="rating-4"
        //         name="rating"
        //         type="radio"
        //     />
        //     <label htmlFor="rating-4" title="4 stars">
        //         <svg height="1em" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        //             <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        //         </svg>
        //     </label>

        //     <input
        //         defaultValue="3"
        //         id="rating-3"
        //         name="rating"
        //         type="radio"
        //     />
        //     <label htmlFor="rating-3" title="3 stars">
        //         <svg height="1em" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        //             <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        //         </svg>
        //     </label>

        //     <input
        //         defaultValue="2"
        //         id="rating-2"
        //         name="rating"
        //         type="radio"
        //     />
        //     <label htmlFor="rating-2" title="2 stars">
        //         <svg height="1em" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        //             <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        //         </svg>
        //     </label>

        //     <input
        //         defaultValue="1"
        //         id="rating-1"
        //         name="rating"
        //         type="radio"
        //     />
        //     <label htmlFor="rating-1" title="1 star">
        //         <svg height="1em" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        //             <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        //         </svg>
        //     </label>
        // </div>
    );
}
