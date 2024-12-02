import React from 'react';
import Flag from 'react-world-flags';

const LangFlag = ({ lang }) => {
    const langCode = lang ?
        (lang.toLowerCase() === 'en' ? 'gb' :
            (lang.toLowerCase() === 'zh' ? 'cn' :
                (lang.toLowerCase() === 'ja' ? 'jp' :
                    (lang.toLowerCase() === 'ko' ? 'kor' : lang.toLowerCase()))))
        : null;

    return langCode ? <Flag code={langCode} style={{ width: '30px', height: '20px' }} /> : null;
};

export default LangFlag;