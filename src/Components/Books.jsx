import { DataContext } from "../App";
import {useState, useContext} from "react";

export default function Books(){
    const {booklist, setBookList}=useContext(DataContext);

    return(
      
                <div>
                <h2 className="text-2xl">You have {booklist.length} books</h2>

                <ul>
                    {booklist.map((book,index)=>{return<li>Book #{index+1} {book.title}</li>})}
                </ul>
                </div>
    )
    }