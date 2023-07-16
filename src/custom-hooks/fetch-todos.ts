import { useState, useEffect } from "react";
import { TODOViewModel } from "../models/todo-view-mode";

function useFetch(url: string) {
    const [todos, setTodos] = useState<TODOViewModel[]>([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTodos(data))
            .catch((err) => {
                alert("Error while fetching todos " + err)
                setTodos([])
            });
    }, [url]);

    return [todos];
}

export default useFetch;