export interface Book {
  title: string;
  authors: string[];
  publisher?: string;
  imgUrl: ImgUrls;
}

interface ImgUrls {
  smallThumbnail?: string;
  thumbnail?: string;
}
