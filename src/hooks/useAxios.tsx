import { useState, useEffect } from 'react';
import { User } from '../types/user';
import axios from 'axios';
import transformData from '../utils/transformData';

const useAxios = () => {
  const [data, setData] = useState<User[]>([])
  const [fetching, setFetching] = useState<boolean>(false)

  const uploadData = async () => {
    try {
      setFetching(true)
      const users = await axios.get('https://jsonplaceholder.typicode.com/users')
      const tasks = await axios.get('https://jsonplaceholder.typicode.com/todos')
      setData(transformData(users.data, tasks.data))
    } catch (error) {
      console.log(error);
    } finally {
      setFetching(false)
    }
  }

  useEffect(() => {
    uploadData()
  }, [])

  return { data, fetching };
};

export default useAxios;