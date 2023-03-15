import { useState, useEffect } from "react";

export default function Mainpage() {
    const [lists, setLists] = useState(null);
    // const [loading, setLoading] = useState(true);



    useEffect(() => {
        fetch(`http://localhost:4000/list`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((listjson) => {
                setLists(listjson);
                console.log(lists)
            })
            .catch((err) => {
                // do something
            })
            .finally(() => {
                // setLoading(false);
            })


    }, [lists])

    // function parseLists(listarray){
    //     var parsedJSON = JSON.parse(listarray.d);
    //     for (var i=0;i<parsedJSON.length;i++) {
    //         console.log(parsedJSON[i].Id);
    //     }
    // }

    // useEffect(() => {
    //     fetch(`http://localhost:4000/list/`+listname+`/note/`)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(
    //                     `This is an HTTP error: The status is ${response.status}`
    //                 );
    //             }
    //             return response.json();
    //         })
    //         .then((listjson) => {
    //             setLists(listjson);
    //         })
    //         .catch((err) => {
    //             // do something
    //         })
    //         .finally(() => {
    //             // setLoading(false);
    //         })


    // }, [lists])



    return <div></div>

}
