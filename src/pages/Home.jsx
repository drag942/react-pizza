import React from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";
import {useSelector, useDispatch} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import LoadingBlock from "../components/PizzaBlock/LoadingBlock";
import {addPizzaToCart} from "../redux/actions/cart";

const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
];

const sortItems = [{name:'популярности', type: 'popular'}, {name:'цене', type: 'price'}, {name:'алфавиту', type: 'name'}];


const Home = () => {

    const items = useSelector(({pizzas}) => pizzas.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback(index => {
        dispatch(setCategory(index))
    },[]);

    const onSelectSortType = React.useCallback(({type}) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddPizzaToCart = obj => {
        dispatch(addPizzaToCart(obj))
    };


    return (
        <div className="container">
            <div className="content__top">
                <Categories onClick={onSelectCategory} items={
                    categoryNames
                } activeCategory={category}/>
                <SortPopup activeSortType={sortBy} items={sortItems} onClickSortType={onSelectSortType} />
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded ? items.map(item => <PizzaBlock addedCount={cartItems[item.id] && cartItems[item.id].items.length} onAddPizza={handleAddPizzaToCart} key={item.id} {...item}/>) :
                        Array(12).fill(0).map((_, index) => <LoadingBlock key={index}/>)
                }
            </div>
        </div>
    );
};

export default Home;