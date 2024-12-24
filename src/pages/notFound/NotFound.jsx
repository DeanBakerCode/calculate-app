import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000);
    });
    return <h1>Not Found, returning you to Home.</h1>;
}
