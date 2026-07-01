import { useState, useEffect } from "react";
import { getHealth, getState } from "../api/client";

export default function useDashboard() {

    const [health, setHealth] = useState(null);
    const [state, setState] = useState(null);

    async function load() {

        try {

            const h = await getHealth();
            const s = await getState();

            setHealth(h);
            setState(s);

        } catch (err) {

            console.error(err);

        }

    }

    useEffect(() => {

        load();

        const timer = setInterval(load,3000);

        return ()=>clearInterval(timer);

    },[]);

    return {

        health,
        state

    };

}
