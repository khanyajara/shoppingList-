import React,{useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemCategory } from "../redux/action";

const CategoryItem = () => {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category);
    const [search, setSearch] = useState("");
    const [categoryList, setCategoryList] = useState([]);


    useEffect(()=>{
        dispatch(itemCategory());
    },[dispatch])

    useEffect(()=>{
        if(category){
            const filteredList = category.filter((item)=> item.toLowerCase().includes(search.toLowerCase())


            );setCategoryList(filteredList) 
        }
    },[search,category])

    return(
        <div className="search">
            <input 
            type="text"
            value={search}
            placeholder="search categories"
            onChange={(e)=>setSearch(e.target.value)}
            />
            <ul>
                {categoryList.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );

};

export default CategoryItem;