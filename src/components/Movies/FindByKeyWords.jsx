import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { Input, SearchBtn } from './FindByKeyWords.styled';

export const FindMoviesByKeywords = ({onSubmit}) => {

    const [keyWords, setKeyWords] = useState('');
    

    const handleInputChange = event => {
        setKeyWords(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (keyWords.trim() === '') {
            return toast('Please enter a movie name!')
        };

        onSubmit(keyWords);
        setKeyWords('');
    };
    
    return(
        <>
         <form onSubmit={handleSubmit}>
           <Input
                type="text"
                value={keyWords}
                onChange={handleInputChange}
                autoComplete="off"
                autoFocus
                placeholder="Search movie"></Input>
           <SearchBtn type="submit">Search</SearchBtn>
         </form>
        </>
    );
};

FindMoviesByKeywords.propTypes = {
    onSubmit: PropTypes.func
}