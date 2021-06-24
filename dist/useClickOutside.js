import { useEffect } from 'react';
const useClickOutside = (ref, fnCallback) => {
    function handleClickOutside(event) {
        if (ref.current && event.target && !ref.current.contains(event.target)) {
            fnCallback();
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });
};
export default useClickOutside;
