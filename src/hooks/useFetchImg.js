import { useEffect, useState } from 'react';

const useFetchImg = (imageUrl) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const response = await fetch(imageUrl, { mode: 'cors' });

        if (response.status >= 400) {
          throw new Error('Server error');
        }

        const blobResponse = await response.blob();
        setImage(blobResponse);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImg();
  }, [imageUrl]);

  return { image, error, loading };
};

export default useFetchImg;
