import {useCallback, useState} from 'react';

function useKitten() {
  const [imgUrl, setImgUrl] = useState('');

  const containerRef = useCallback(node => {
    if(node) {
      const rect = node.getClientRects()[0];
      setImgUrl(`http://placekitten.com/${parseInt(rect.width)}/${parseInt(rect.height)}`);
    }
  }, []);

  return [containerRef, imgUrl];
}

export default useKitten;