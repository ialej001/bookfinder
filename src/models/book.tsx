export interface Book {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  imgUrl: ImgUrls;
  isbn: Isbn[];
  description: string;
  pageCount: number;
  averageRating: number;
  ratingCount: number;
}

interface ImgUrls {
  smallThumbnail: string;
  thumbnail: string;
}

interface Isbn {
  type: string;
  identifier: string;
}