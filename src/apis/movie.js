import fetcher from './fetcher';

export const listMovieApi = async (data) => {
  //data : { soTrang: 2, soPhanTuTrenTrang: 10 ,maNhom=GP01} =>
  //  /QuanLyPhim/LayDanhSachPhimPhanTrang?soTrang=2&soPhanTuTrenTrang=10&maNhom=GP01
  try {
    const response = await fetcher.get('/QuanLyPhim/LayDanhSachPhimPhanTrang', {
      params: data,
    });
    return response.data.content;
  } catch (error) {
    console.error('Error fetching movie list:', error);
    throw error;
  }
};

export const addMovieApi = async (formData) => {
  try {
    const response = await fetcher.post('/QuanLyPhim/ThemPhimUploadHinh', formData);
    return response.data.content;
  } catch (error) {
    console.error('Error adding movie:', error);
    throw error;
  }
};
