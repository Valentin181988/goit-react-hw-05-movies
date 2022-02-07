import { useState } from 'react';
import { toast } from 'react-hot-toast';

export const FindMoviesByKeywords = ({onSubmit}) => {

    const [keyWords, setKeyWords] = useState('');
    

    const handleInputChange = event => {
        setKeyWords(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (keyWords.trim() === '') {
            return toast('Please enter a picture name!')
        };

        onSubmit(keyWords);
        setKeyWords('');
    };
    
    return(
        <>
         <form onSubmit={handleSubmit}>
           <input
                type="text"
                value={keyWords}
                onChange={handleInputChange}
                autoComplete="off"
                autoFocus
                placeholder="Search movie"></input>
           <button type="submit">Search</button>
         </form>
        </>
    );
}