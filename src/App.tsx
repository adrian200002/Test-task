import React, { useEffect, useState } from 'react'
import Table from './components/Table'
import { getTags } from './utils/api/posts'
import { Tag } from './utils/types/Tag';
import { Box } from '@mui/material'
import Error from './components/Error';
import Loader from './components/Loader';

export default function App() {
  const [tags, setTags] = useState<[] | Tag[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true);
    const loadTags = async() => {
      try {
        const fetchedTags = await getTags();
        setTags(fetchedTags.items);
      } catch(error) {
        setError(true)
      } finally {
        setIsLoading(false);
      }
    }

    loadTags();
  }, [])
    
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
      <>
        {error ? (
          <Error />
          ) : (
            <Box sx={{px: { xs: 0, sm: 10 }}}>
              <Table tags={tags}/>
            </Box>
          )}
      </>
      )
      }
    </>
  )
}