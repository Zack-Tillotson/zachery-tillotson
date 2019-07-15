// This hook is used to get a PlaceKitten URL for use within a specific container.
// We expose a ref & the image URL and then internally take care of monitoring the
// element's size and providing a properly sized image.

import {useState, useRef, useEffect} from 'react';

function useKitten() {

  // Our state variables
  const [imgUrl, setImgUrl] = useState('');
  const [isPending, setPending] = useState(false);
  const containerRef = useRef(null);

  // Utility function to calculate the correct placekitten URL for the given element
  const updateImage = () => {
    if(!containerRef.current) return;

    const rect = containerRef.current.getClientRects()[0];
    setImgUrl(`http://placekitten.com/${parseInt(rect.width)}/${parseInt(rect.height)}`);
    setPending(false);
  }

  // Utility function to trigger the URL to update periodically
  const scrollHandler = () => {
    if(!isPending) {
      setPending(true);
      requestAnimationFrame(updateImage);
    }
  }

  // Trigger updates when we mount the container & when the screen resizes
  useEffect(() => {
    updateImage();
    window.addEventListener('resize', scrollHandler);
    return () => window.removeEventListener('resize', scrollHandler);
  }, [containerRef.current]);

  return [containerRef, imgUrl];
}

export default useKitten;