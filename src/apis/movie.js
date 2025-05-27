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
