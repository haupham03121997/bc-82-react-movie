import { listMovieApi } from '@/apis/movie';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function MovieManagement() {
  const { data, isLoading, error } = useQuery({
    queryFn: () => listMovieApi({ soTrang: 1, soPhanTuTrenTrang: 10, maNhom: 'GP01' }),
    queryKey: ['movieList', { soTrang: 1, soPhanTuTrenTrang: 10, maNhom: 'GP01' }],
  });
  console.log('🔥 ~ MovieManagement ~ data:', data);
  return <div>Movie Management</div>;
}
