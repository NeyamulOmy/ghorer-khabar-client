import React, { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Ghorer Khabar`;
    }, [title])

};

export default useTitle;