import * as React from 'react';
import { TestiMonialCard, BoxRatings } from './styles/testimonial-style';
import Rating from '@material-ui/core/Rating';

const Testimonial = (props) => {
    const { message, person, job, rating, avatar } = props

    return (
        <>
        <TestiMonialCard>
            <p>{message}</p>
            <img src={avatar} alt="Person" />
            <h3>{person}</h3>
            <h5>{job}</h5>

            <BoxRatings>
                    <Rating name="half-rating" value={rating}  size="small" readOnly  />
            </BoxRatings>

        </TestiMonialCard>
        </>
    );
}

export default Testimonial;