import { listMovieApi } from '@/apis/movie';
import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { CalendarIcon, Plus } from 'lucide-react';
import React from 'react';
import { DataTable } from '@/components/ui/data-table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function MovieManagement() {
  const [isOpen, setIsOpen] = React.useState(false);
  const imageRef = React.useRef(null);
  const { data, isLoading, error } = useQuery({
    queryFn: () => listMovieApi({ soTrang: 1, soPhanTuTrenTrang: 10, maNhom: 'GP01' }),
    queryKey: ['movieList', { soTrang: 1, soPhanTuTrenTrang: 10, maNhom: 'GP01' }],
  });

  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='font-bold'>Danh sách phim</h1>
        <Button size='lg' onClick={() => setIsOpen(true)}>
          <Plus />
          Thêm phim
        </Button>
      </div>
      <div className='mt-6'>
        <DataTable
          columns={[
            {
              accessorKey: 'tenPhim',
              header: 'Tên Phim',
              cell: ({ row }) => {
                return (
                  <div className='font-semibold max-w-[120px] overflow-hidden text-ellipsis'>
                    {row.original.tenPhim}
                  </div>
                );
              },
              size: 80,
            },
            {
              accessorKey: 'hinhAnh',
              header: 'Hình Ảnh',
              cell: ({ row }) => {
                return (
                  <img
                    src={row.original.hinhAnh}
                    alt={row.original.biDanh}
                    className='rounded-lg h-16 w-16 object-cover'
                  />
                );
              },
            },
            {
              accessorKey: 'moTa',
              header: 'Mô Tả',
              cell: ({ row }) => {
                return <div className='max-w-[200px] overflow-hidden text-ellipsis'>{row.original.moTa}</div>;
              },
            },
            {
              accessorKey: 'ngayKhoiChieu',
              header: 'Ngày Khởi Chiếu',
              cell: ({ row }) => {
                return new Date(row.original.ngayKhoiChieu).toLocaleDateString('vi-VN');
              },
            },
            {
              accessorKey: 'dangChieu',
              header: 'Trang thái',
              cell: ({ row }) => {
                return (
                  <div>
                    {row.original.dangChieu ? (
                      <span className='inline-block px-2 py-1 text-sm text-green-600 border rounded-lg'>
                        Đang chiếu
                      </span>
                    ) : (
                      <span className='inline-block px-2 py-1 text-sm text-gray-500 opacity-60 border rounded-lg'>
                        Sắp chiếu
                      </span>
                    )}
                  </div>
                );
              },
            },
            {
              accessorKey: 'hot',
              header: 'Đang hot',
              cell: ({ row }) => {
                return <div className='text-xl'>{row.original.hot ? '🔥' : ''}</div>;
              },
            },
            {
              header: 'Hành động',
              accessorKey: 'actions',
              cell: ({ row }) => {
                return (
                  <div className='flex items-center gap-2'>
                    <Button variant='outline' size='sm'>
                      Sửa
                    </Button>
                    <Button variant='destructive' size='sm'>
                      Xóa
                    </Button>
                  </div>
                );
              },
            },
          ]}
          data={data?.items || []}
        />
      </div>

      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thêm phim mới</DialogTitle>
            <DialogDescription>
              Đây là nơi bạn có thể thêm phim mới vào hệ thống. Vui lòng điền đầy đủ thông tin cần thiết.
            </DialogDescription>
          </DialogHeader>
          <form className='space-y-4'>
            <Input placeholder='Tên phim' className='w-full' />
            <Input placeholder='Trailer' className='w-full' />
            <Textarea placeholder='Mô tả' className='w-full' />

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn('w-full justify-start text-left font-normal text-muted-foreground')}
                >
                  <CalendarIcon />
                  {<span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0' align='start'>
                <Calendar mode='single' initialFocus />
              </PopoverContent>
            </Popover>

            <div className='flex items-center space-x-2'>
              <Checkbox id='hot' />
              <Label htmlFor='hot'>Hot</Label>
            </div>
            <div>
              <Input type='file' hidden ref={imageRef} />
              <Button
                type='button'
                onClick={() => {
                  imageRef.current.click();
                }}
              >
                Thêm ảnh
              </Button>
            </div>

            <div className='flex items-center space-x-2'>
              <Switch id='status' />
              <Label htmlFor='status'>Trạng thái chiếu</Label>
            </div>
            <div className='flex items-end justify-end mt-4'>
              <Button>Thêm phim</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
