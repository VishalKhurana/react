import {COMMENTS} from '../Components/shared/Comments';
import {PROMOTIONS} from '../Components/shared/promotions';
import {LEADERS} from '../Components/shared/Leaders';
import {DISHES} from '../Components/shared/dishes';
export const initialState={
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};
export const Reducer=(state = initialState,action)=>{
    return state;

}